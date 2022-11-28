

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://api.sportsdata.io",
	"https://api.sportsdata.io",
	"http://azure-api.sportsdata.io",
	"https://azure-api.sportsdata.io",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def premium_news(self, request: operations.PremiumNewsRequest) -> operations.PremiumNewsResponse:
        r"""Premium News
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/RotoBallerPremiumNews", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PremiumNewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.news = out

        return res

    
    def premium_news_by_date(self, request: operations.PremiumNewsByDateRequest) -> operations.PremiumNewsByDateResponse:
        r"""Premium News by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/RotoBallerPremiumNewsByDate/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PremiumNewsByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.news = out

        return res

    
    def premium_news_by_player(self, request: operations.PremiumNewsByPlayerRequest) -> operations.PremiumNewsByPlayerResponse:
        r"""Premium News by Player
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/RotoBallerPremiumNewsByPlayerID/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PremiumNewsByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.news = out

        return res

    
    def premium_news_by_team(self, request: operations.PremiumNewsByTeamRequest) -> operations.PremiumNewsByTeamResponse:
        r"""Premium News by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/RotoBallerPremiumNewsByTeam/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PremiumNewsByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.news = out

        return res

    