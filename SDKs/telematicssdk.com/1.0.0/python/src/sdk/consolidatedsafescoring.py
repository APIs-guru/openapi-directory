import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ConsolidatedSafeScoring:
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

    
    def root_v1_scorings_consolidated(self, request: operations.RootV1ScoringsConsolidatedRequest) -> operations.RootV1ScoringsConsolidatedResponse:
        r"""/v1/Scorings/consolidated
        /v1/Scorings/consolidated
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/statistics/v1/Scorings/consolidated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RootV1ScoringsConsolidatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            

        return res

    
    def root_v1_scorings_consolidated_daily(self, request: operations.RootV1ScoringsConsolidatedDailyRequest) -> operations.RootV1ScoringsConsolidatedDailyResponse:
        r"""/v1/Scorings/consolidated/daily
        /v1/Scorings/consolidated/daily
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/statistics/v1/Scorings/consolidated/daily"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RootV1ScoringsConsolidatedDailyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RootV1ScoringsConsolidatedDaily200ApplicationJSON])
                res.root_v1_scorings_consolidated_daily_200_application_json_object = out

        return res

    