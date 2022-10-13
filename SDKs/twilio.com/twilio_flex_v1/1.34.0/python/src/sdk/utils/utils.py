import cgi
import json
from dataclasses import (Field, dataclass, field, fields, is_dataclass,
                         make_dataclass)
from typing import List, Tuple
from xmlrpc.client import boolean

import requests
from dataclasses_json import DataClassJsonMixin


class SecurityClient:
    client: requests.Session = requests.Session()
    query_params: dict[str, str] = {}

    def request(self, method, url, **kwargs):
        params = kwargs.get('params', {})
        kwargs["params"] = self.query_params | params

        return self.client.request(method, url, **kwargs)


def configure_security_client(security: dataclass):
    client = SecurityClient()

    sec_fields: Tuple[Field, ...] = fields(security)
    for sec_field in sec_fields:
        value = getattr(security, sec_field.name)
        if value is None:
            continue

        metadata = sec_field.metadata.get('security')
        if metadata is None:
            continue
        if metadata.get('option'):
            _parse_security_option(client, value)
            return
        elif metadata.get('scheme'):
            _parse_security_scheme(client, metadata, value)

    return client


def _parse_security_option(client: SecurityClient, option: dataclass):
    opt_fields: Tuple[Field, ...] = fields(option)
    for opt_field in opt_fields:
        metadata = opt_field.metadata.get('security')
        if metadata is None or metadata.get('scheme') is None:
            continue
        _parse_security_scheme(client, metadata.get(
            'scheme'), getattr(option, opt_field.name))


def _parse_security_scheme(client: SecurityClient, scheme_metadata: dict, scheme: dataclass):
    scheme_fields: Tuple[Field, ...] = fields(scheme)
    for scheme_field in scheme_fields:
        metadata = scheme_field.metadata.get('security')
        if metadata is None or metadata.get('field_name') is None:
            continue

        scheme_type = scheme_metadata.get('type')
        header_name = metadata.get('field_name')
        value = getattr(scheme, scheme_field.name)

        if scheme_type == "apiKey":
            if scheme_metadata.get('sub_type') == 'header':
                client.client.headers[header_name] = value
            elif scheme_metadata.get('sub_type') == 'query':
                client.query_params[header_name] = value
            elif scheme_metadata.get('sub_type') == 'cookie':
                client.client.cookies[header_name] = value
            else:
                raise Exception('not supported')
        elif scheme_type == "openIdConnect":
            client.client.headers[header_name] = value
        elif scheme_type == 'oauth2':
            client.client.headers[header_name] = value
        elif scheme_type == 'http':
            if scheme_metadata.get('sub_type') == 'bearer' or scheme_metadata.get('sub_type') == 'basic':
                client.client.headers[header_name] = value
            else:
                raise Exception('not supported')
        else:
            raise Exception('not supported')


def generate_url(server_url: str, path: str, path_params: dataclass) -> str:
    param_fields: Tuple[Field, ...] = fields(path_params)
    for f in param_fields:
        param_metadata = f.metadata.get('path_param')
        if not param_metadata:
            continue
        if param_metadata.get('style', 'simple') == 'simple':
            param = getattr(path_params, f.name)
            path = path.replace(
                '{' + param_metadata.get('field_name', f.name) + '}', str(param), 1)

    return server_url.removesuffix("/") + path


def replace_parameters(string_with_params: str, params: dict[str, str]) -> str:
    for key, value in params.items():
        string_with_params = string_with_params.replace(
            '{' + key + '}', value)

    return string_with_params


def get_query_params(query_params: dataclass) -> dict[str, List[str]]:
    if query_params is None:
        return {}

    params: dict[str, List[str]] = {}

    param_fields: Tuple[Field, ...] = fields(query_params)
    for f in param_fields:
        metadata = f.metadata.get('query_param')
        if not metadata:
            continue

        serialization = metadata.get('serialization', '')
        if serialization != '':
            params = params | _get_serialized_query_params(
                metadata, f.name, getattr(query_params, f.name))
        else:
            style = metadata.get('style', 'form')
            if style == 'deepObject':
                params = params | _get_deep_object_query_params(
                    metadata, f.name, getattr(query_params, f.name))
            elif style == 'form':
                params = params | _get_form_query_params(
                    metadata, f.name, getattr(query_params, f.name))
            else:
                raise Exception('not yet implemented')

    return params


def _get_serialized_query_params(metadata: dict, field_name: str, obj: any) -> dict[str, List[str]]:
    params: dict[str, List[str]] = {}

    serialization = metadata.get('serialization', '')

    if serialization == 'json':
        params[metadata.get("field_name", field_name)] = marshal_json(obj)

    return params


def _get_deep_object_query_params(metadata: dict, field_name: str, obj: any) -> dict[str, List[str]]:
    params: dict[str, List[str]] = {}

    if is_dataclass(obj):
        obj_fields: Tuple[Field, ...] = fields(obj)
        for obj_field in obj_fields:
            obj_param_metadata = obj_field.metadata.get('query_param')
            if not obj_param_metadata:
                continue
            params[f'{metadata.get("field_name", field_name)}[{obj_param_metadata.get("field_name", obj_field.name)}]'] = [
                getattr(obj, obj_field.name)]
    elif isinstance(obj, dict):
        for key, value in obj.items():
            if isinstance(value, list):
                params[f'{metadata.get("field_name", field_name)}[{key}]'] = value
            else:
                params[f'{metadata.get("field_name", field_name)}[{key}]'] = [
                    value]
    return params


def _get_form_query_params(metadata: dict, field_name: str, obj: any) -> dict[str, List[str]]:
    params: dict[str, List[str]] = {}

    if is_dataclass(obj):
        items = []

        obj_fields: Tuple[Field, ...] = fields(obj)
        for obj_field in obj_fields:
            obj_param_metadata = obj_field.metadata.get('query_param')
            if not obj_param_metadata:
                continue

            if metadata.get("explode"):
                params[{obj_param_metadata.get("field_name", obj_field.name)}] = [getattr(
                    obj, obj_field.name)]
            else:
                items.append(
                    f'{obj_param_metadata.get("field_name", obj_field.name)},{getattr(obj, obj_field.name)}')

        if items.count() > 0:
            params[metadata.get("field_name", field_name)] = [','.join(items)]
    elif isinstance(obj, dict):
        items = []

        for key, value in obj.items():
            if metadata.get("explode"):
                params[{obj_param_metadata.get(
                    "field_name", obj_field.name)}] = value
            else:
                items.append(f'{key},{value}')

        if items.count() > 0:
            params[metadata.get("field_name", field_name)] = [','.join(items)]
    elif isinstance(obj, list):
        items = []

        for value in obj:
            if metadata.get("explode"):
                params[metadata.get("field_name", field_name)] = value
            else:
                items.append(value)

        if items.count() > 0:
            params[metadata.get("field_name", field_name)] = [','.join(items)]
    else:
        params[metadata.get("field_name", field_name)] = obj

    return params


def serialize_request_body(request: dataclass) -> Tuple[str, any, any]:
    if request is None:
        return None, None, None

    request_val = getattr(request, "request")
    if request_val is None:
        raise Exception("request body not found")

    request_fields: Tuple[Field, ...] = fields(request)
    request_metadata = None

    for f in request_fields:
        if f.name == "request":
            request_metadata = f.metadata.get('request')
            break

    if not request_metadata is None:
        # single request
        return serialize_content_type(request_metadata, request_val)

    request_fields: Tuple[Field, ...] = fields(request_val)
    for f in request_fields:
        req = getattr(request_val, f.name)
        if req is None:
            continue

        request_metadata = f.metadata.get('request')
        if request_metadata is None:
            raise Exception(
                f'missing request tag on request body field {f.name}')

        return serialize_content_type(request_metadata, req)


def serialize_content_type(metadata, request: dataclass) -> Tuple[str, any, any]:
    media_type = metadata.get('media_type', 'application/octet-stream')

    if media_type == 'application/json' or media_type == 'text/json':
        return media_type, marshal_json(request).encode(), None
    elif media_type == 'multipart/form-data' or media_type == 'multipart/mixed':
        form: List[List[any]] = []
        request_fields: Tuple[Field, ...] = fields(request)
        for f in request_fields:
            field_metadata = f.metadata.get('multipart_form')
            if field_metadata is None:
                continue
            if field_metadata.get("file") is True:
                file = getattr(request, f.name)
                file_fields = fields(file)

                file_name = ""
                field_name = ""
                content = bytes()

                for file_field in file_fields:
                    file_metadata = file_field.metadata.get('multipart_form')
                    if file_metadata is None:
                        continue
                    if file_metadata.get("content") is True:
                        content = getattr(file, file_field.name)
                    else:
                        field_name = file_metadata.get(
                            "field_name", file_field.name)
                        file_name = getattr(file, file_field.name)
                if field_name == "" or file_name == "" or content == bytes():
                    raise Exception('invalid multipart/form-data file')

                form.append([field_name, [file_name, content]])
            elif field_metadata.get("json") is True:
                form.append([field_metadata.get("field_name", f.name), [
                            None, marshal_json(getattr(request, f.name)), "application/json"]])
            else:
                val = getattr(request, f.name)
                field_name = field_metadata.get("field_name", f.name)

                if isinstance(val, list):
                    items = []

                    for value in val:
                        if metadata.get("explode"):
                            form.append([field_name+"[]", [None, value]])
                        else:
                            items.append(value)

                    if items.count() > 0:
                        form.append([field_name+"[]", [None, ','.join(items)]])
                else:
                    form.append([field_name, [None, val]])
        return media_type, None, form
    else:
        if isinstance(request, (bytes, bytearray)):
            return media_type, request, None
        else:
            raise Exception(
                f"invalid request body type {type(request)} for mediaType {metadata['media_type']}")


def unmarshal_json(data, t):
    Unmarhsal = make_dataclass('Unmarhsal', [('res', t)],
                               bases=(DataClassJsonMixin,))
    d = json.loads(data)
    out = Unmarhsal.from_dict({"res": d})
    return out.res


def marshal_json(c):
    Marshal = make_dataclass('Marshal', [('res', type(c))],
                             bases=(DataClassJsonMixin,))
    m = Marshal(res=c)
    d = m.to_dict()
    return json.dumps(d["res"])


def match_content_type(content_type: str, pattern: str) -> boolean:
    if content_type == pattern or pattern == "*" or pattern == "*/*":
        return True

    media_type, _ = cgi.parse_header(content_type)

    if media_type == pattern:
        return True

    parts = media_type.split("/")
    if len(parts) == 2:
        if f'{parts[0]}/*' == pattern or f'*/{parts[1]}' == pattern:
            return True

    return False
