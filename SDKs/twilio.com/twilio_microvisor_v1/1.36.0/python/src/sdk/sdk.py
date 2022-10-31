import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://microvisor.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def delete_app(self, request: operations.DeleteAppRequest) -> operations.DeleteAppResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_APP_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Apps/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_app(self, request: operations.FetchAppRequest) -> operations.FetchAppResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_APP_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Apps/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MicrovisorV1App])
                res.microvisor_v1_app = out

        return res

    
    def fetch_device(self, request: operations.FetchDeviceRequest) -> operations.FetchDeviceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_DEVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Devices/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MicrovisorV1Device])
                res.microvisor_v1_device = out

        return res

    
    def list_app(self, request: operations.ListAppRequest) -> operations.ListAppResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_APP_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Apps"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAppListAppResponse])
                res.list_app_response = out

        return res

    
    def list_device(self, request: operations.ListDeviceRequest) -> operations.ListDeviceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_DEVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Devices"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDeviceListDeviceResponse])
                res.list_device_response = out

        return res

    
    def update_device(self, request: operations.UpdateDeviceRequest) -> operations.UpdateDeviceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_DEVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Devices/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MicrovisorV1Device])
                res.microvisor_v1_device = out

        return res

    