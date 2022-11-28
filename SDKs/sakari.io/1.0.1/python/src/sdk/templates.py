import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Templates:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def templates_create(self, request: operations.TemplatesCreateRequest) -> operations.TemplatesCreateResponse:
        r"""Create template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/templates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TemplatesResponse])
                res.templates_response = out

        return res

    
    def templates_fetch(self, request: operations.TemplatesFetchRequest) -> operations.TemplatesFetchResponse:
        r"""Fetch template by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/templates/{templateId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TemplatesFetchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TemplateResponse])
                res.template_response = out

        return res

    
    def templates_fetch_all(self, request: operations.TemplatesFetchAllRequest) -> operations.TemplatesFetchAllResponse:
        r"""Fetch templates
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/templates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TemplatesFetchAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TemplatesResponse])
                res.templates_response = out
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code >= 500 and r.status_code < 600:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def templates_remove(self, request: operations.TemplatesRemoveRequest) -> operations.TemplatesRemoveResponse:
        r"""Deletes a template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/templates/{templateId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TemplatesRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TemplatesRemove200ApplicationJSON])
                res.templates_remove_200_application_json_object = out

        return res

    
    def templates_update(self, request: operations.TemplatesUpdateRequest) -> operations.TemplatesUpdateResponse:
        r"""Updates a template
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/templates/{templateId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TemplateResponse])
                res.template_response = out

        return res

    