import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Devices:
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

    
    def delete_devices_id_(self, request: operations.DeleteDevicesIDRequest) -> operations.DeleteDevicesIDResponse:
        r"""Delete a Device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDevicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_devices(self, request: operations.GetDevicesRequest) -> operations.GetDevicesResponse:
        r"""Fetch a list of Devices
        Without any params, returns a list of the user's devices
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/devices"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_devices(self, request: operations.PostDevicesRequest) -> operations.PostDevicesResponse:
        r"""Create a Device
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/devices"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def put_devices_id_(self, request: operations.PutDevicesIDRequest) -> operations.PutDevicesIDResponse:
        r"""Update a Device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDevicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def put_devices_id_accumulators(self, request: operations.PutDevicesIDAccumulatorsRequest) -> operations.PutDevicesIDAccumulatorsResponse:
        r"""Update total distance and hours of the Device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{id}/accumulators", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDevicesIDAccumulatorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    