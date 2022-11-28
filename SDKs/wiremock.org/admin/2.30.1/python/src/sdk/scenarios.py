import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Scenarios:
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

    
    def get_admin_scenarios(self) -> operations.GetAdminScenariosResponse:
        r"""Get all scenarios
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/scenarios"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminScenariosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAdminScenarios200ApplicationJSON])
                res.get_admin_scenarios_200_application_json_object = out

        return res

    
    def post_admin_scenarios_reset(self) -> operations.PostAdminScenariosResetResponse:
        r"""Reset the state of all scenarios
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/scenarios/reset"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminScenariosResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    