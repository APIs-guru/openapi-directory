

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.vonage.com/t/vbc.prod/provisioning",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def extension_ctrl_get_account_extension_by_id(self, request: operations.ExtensionCtrlGetAccountExtensionByIDRequest) -> operations.ExtensionCtrlGetAccountExtensionByIDResponse:
        r"""Get extension data by account ID and extension number
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/accounts/{account_id}/extensions/{extension_number}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtensionCtrlGetAccountExtensionByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EndUserRouteHalResponse])
                res.end_user_route_hal_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def extension_ctrl_get_account_extensions(self, request: operations.ExtensionCtrlGetAccountExtensionsRequest) -> operations.ExtensionCtrlGetAccountExtensionsResponse:
        r"""Get account extensions data by account ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/accounts/{account_id}/extensions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtensionCtrlGetAccountExtensionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EndUserRouteHalResponse])
                res.end_user_route_hal_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorsResponse])
                res.validation_errors_response = out

        return res

    