

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
        
    
    
    
    def are_games_in_progress(self, request: operations.AreGamesInProgressRequest) -> operations.AreGamesInProgressResponse:
        r"""Are Games In Progress
        Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/AreAnyGamesInProgress", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AreGamesInProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.are_games_in_progress_200_application_json_boolean = out

        return res

    
    def current_season(self, request: operations.CurrentSeasonRequest) -> operations.CurrentSeasonResponse:
        r"""Current Season
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/CurrentSeason", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CurrentSeasonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.season = out

        return res

    
    def games_by_date(self, request: operations.GamesByDateRequest) -> operations.GamesByDateResponse:
        r"""Games by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/GamesByDate/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.games = out

        return res

    
    def league_hierarchy(self, request: operations.LeagueHierarchyRequest) -> operations.LeagueHierarchyResponse:
        r"""League Hierarchy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/LeagueHierarchy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LeagueHierarchyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.conferences = out

        return res

    
    def player_details_by_active(self, request: operations.PlayerDetailsByActiveRequest) -> operations.PlayerDetailsByActiveResponse:
        r"""Player Details by Active
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Players", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerDetailsByActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.players = out

        return res

    
    def player_details_by_player(self, request: operations.PlayerDetailsByPlayerRequest) -> operations.PlayerDetailsByPlayerResponse:
        r"""Player Details by Player
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Player/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerDetailsByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.player = out

        return res

    
    def player_details_by_team(self, request: operations.PlayerDetailsByTeamRequest) -> operations.PlayerDetailsByTeamResponse:
        r"""Player Details by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Players/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerDetailsByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.players = out

        return res

    
    def schedules(self, request: operations.SchedulesRequest) -> operations.SchedulesResponse:
        r"""Schedules
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Games/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.games = out

        return res

    
    def stadiums(self, request: operations.StadiumsRequest) -> operations.StadiumsResponse:
        r"""Stadiums
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Stadiums", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StadiumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.stadiums = out

        return res

    
    def team_game_stats_by_date(self, request: operations.TeamGameStatsByDateRequest) -> operations.TeamGameStatsByDateResponse:
        r"""Team Game Stats by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/TeamGameStatsByDate/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamGameStatsByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.team_games = out

        return res

    
    def team_schedule(self, request: operations.TeamScheduleRequest) -> operations.TeamScheduleResponse:
        r"""Team Schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/TeamSchedule/{season}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.games = out

        return res

    
    def team_season_stats(self, request: operations.TeamSeasonStatsRequest) -> operations.TeamSeasonStatsResponse:
        r"""Team Season Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/TeamSeasonStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamSeasonStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.team_seasons = out

        return res

    
    def teams(self, request: operations.TeamsRequest) -> operations.TeamsResponse:
        r"""Teams
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/teams", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.teams = out

        return res

    
    def tournament_hierarchy(self, request: operations.TournamentHierarchyRequest) -> operations.TournamentHierarchyResponse:
        r"""Tournament Hierarchy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Tournament/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TournamentHierarchyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tournament = out

        return res

    