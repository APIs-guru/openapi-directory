

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
        
    
    
    
    def dfs_slates_by_date(self, request: operations.DfsSlatesByDateRequest) -> operations.DfsSlatesByDateResponse:
        r"""Dfs Slates By Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/DfsSlatesByDate/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DfsSlatesByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.dfs_slates = out

        return res

    
    def projected_player_game_stats_by_date(self, request: operations.ProjectedPlayerGameStatsByDateRequest) -> operations.ProjectedPlayerGameStatsByDateResponse:
        r"""Projected Player Game Stats by Date
        Projected Player Game Stats by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameProjectionStatsByDate/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedPlayerGameStatsByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_game_projections = out

        return res

    
    def projected_player_game_stats_by_player(self, request: operations.ProjectedPlayerGameStatsByPlayerRequest) -> operations.ProjectedPlayerGameStatsByPlayerResponse:
        r"""Projected Player Game Stats by Player
        Projected Player Game Stats by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedPlayerGameStatsByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_game_projections = out

        return res

    