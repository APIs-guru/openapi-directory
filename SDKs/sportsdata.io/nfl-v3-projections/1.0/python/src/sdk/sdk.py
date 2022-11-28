

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
        r"""DFS Slates by Date
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

    
    def dfs_slates_by_week(self, request: operations.DfsSlatesByWeekRequest) -> operations.DfsSlatesByWeekResponse:
        r"""DFS Slates by Week
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/DfsSlatesByWeek/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DfsSlatesByWeekResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.dfs_slates = out

        return res

    
    def idp_projected_player_game_stats_by_player_w_injuries_lineups_dfs_salaries(self, request: operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest) -> operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse:
        r"""IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.player_game_projection = out

        return res

    
    def idp_projected_player_game_stats_by_team_w_injuries_lineups_dfs_salaries(self, request: operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest) -> operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse:
        r"""IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_game_projections = out

        return res

    
    def idp_projected_player_game_stats_by_week_w_injuries_lineups_dfs_salaries(self, request: operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest) -> operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse:
        r"""IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_game_projections = out

        return res

    
    def projected_fantasy_defense_game_stats_w_dfs_salaries(self, request: operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest) -> operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse:
        r"""Projected Fantasy Defense Game Stats (w/ DFS Salaries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FantasyDefenseProjectionsByGame/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.fantasy_defense_game_projections = out

        return res

    
    def projected_fantasy_defense_season_stats_w_bye_week_adp(self, request: operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest) -> operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse:
        r"""Projected Fantasy Defense Season Stats (w/ Bye Week, ADP)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FantasyDefenseProjectionsBySeason/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.fantasy_defense_season_projections = out

        return res

    
    def projected_player_game_stats_by_player_w_injuries_lineups_dfs_salaries(self, request: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest) -> operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse:
        r"""Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.player_game_projection = out

        return res

    
    def projected_player_game_stats_by_team_w_injuries_lineups_dfs_salaries(self, request: operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest) -> operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse:
        r"""Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_game_projections = out

        return res

    
    def projected_player_game_stats_by_week_w_injuries_lineups_dfs_salaries(self, request: operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest) -> operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse:
        r"""Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_game_projections = out

        return res

    
    def projected_player_season_stats_by_player_w_bye_week_adp(self, request: operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest) -> operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse:
        r"""Projected Player Season Stats by Player (w/ Bye Week, ADP)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.player_season_projection = out

        return res

    
    def projected_player_season_stats_by_team_w_bye_week_adp(self, request: operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest) -> operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse:
        r"""Projected Player Season Stats by Team (w/ Bye Week, ADP)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_season_projections = out

        return res

    
    def projected_player_season_stats_w_bye_week_adp(self, request: operations.ProjectedPlayerSeasonStatsWByeWeekAdpRequest) -> operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse:
        r"""Projected Player Season Stats (w/ Bye Week, ADP)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonProjectionStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_season_projections = out

        return res

    