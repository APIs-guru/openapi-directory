import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.vonage.com/t/vbc.prod/provisioning",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def account_ctrl_get_account_services_by_account_id(self, request: operations.AccountCtrlGetAccountServicesByAccountIDRequest) -> operations.AccountCtrlGetAccountServicesByAccountIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/accounts/{account_id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/accounts/{account_id}/locations/{location_id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/accounts/{account_id}/locations", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountCtrlGetLocationsByAccountIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationsHalResponse])
                res.locations_hal_response = out

        return res

    