

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
        
    
    
    
    def account_ctrl_get_account_services_by_account_id(self, request: operations.AccountCtrlGetAccountServicesByAccountIDRequest) -> operations.AccountCtrlGetAccountServicesByAccountIDResponse:
        r"""Get account data by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/accounts/{account_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountCtrlGetAccountServicesByAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountHalResponse])
                res.account_hal_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def account_ctrl_get_location_by_id(self, request: operations.AccountCtrlGetLocationByIDRequest) -> operations.AccountCtrlGetLocationByIDResponse:
        r"""Get location data by account ID and location ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/accounts/{account_id}/locations/{location_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountCtrlGetLocationByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationHalResponse])
                res.location_hal_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def account_ctrl_get_locations_by_account_id(self, request: operations.AccountCtrlGetLocationsByAccountIDRequest) -> operations.AccountCtrlGetLocationsByAccountIDResponse:
        r"""Get account locations data by account ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/accounts/{account_id}/locations", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountCtrlGetLocationsByAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationsHalResponse])
                res.locations_hal_response = out

        return res

    