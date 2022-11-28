import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CheckAPIUsage:
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

    
    def get_api_usage_plans_v2(self, request: operations.GetAPIUsagePlansV2Request) -> operations.GetAPIUsagePlansV2Response:
        r"""Get API Isage
        Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/apiusage"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIUsagePlansV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIUsageList])
                res.api_usage_list = out

        return res

    