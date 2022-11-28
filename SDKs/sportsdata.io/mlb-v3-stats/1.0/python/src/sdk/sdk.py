

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

    
    def batter_vs_pitcher_stats(self, request: operations.BatterVsPitcherStatsRequest) -> operations.BatterVsPitcherStatsResponse:
        r"""Batter vs. Pitcher Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/HitterVsPitcher/{hitterid}/{pitcherid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BatterVsPitcherStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

        return res

    
    def box_score(self, request: operations.BoxScoreRequest) -> operations.BoxScoreResponse:
        r"""Box Score
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScore/{gameid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BoxScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.box_score = out

        return res

    
    def box_scores_by_date(self, request: operations.BoxScoresByDateRequest) -> operations.BoxScoresByDateResponse:
        r"""Box Scores by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScores/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BoxScoresByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_scores = out

        return res

    
    def box_scores_by_date_delta(self, request: operations.BoxScoresByDateDeltaRequest) -> operations.BoxScoresByDateDeltaResponse:
        r"""Box Scores by Date Delta
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScoresDelta/{date}/{minutes}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BoxScoresByDateDeltaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_scores = out

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

    
    def news(self, request: operations.NewsRequest) -> operations.NewsResponse:
        r"""News
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/News", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.news = out

        return res

    
    def news_by_date(self, request: operations.NewsByDateRequest) -> operations.NewsByDateResponse:
        r"""News by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/NewsByDate/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.news = out

        return res

    
    def news_by_player(self, request: operations.NewsByPlayerRequest) -> operations.NewsByPlayerResponse:
        r"""News by Player
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/NewsByPlayerID/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.news = out

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

    
    def player_details_by_free_agents(self, request: operations.PlayerDetailsByFreeAgentsRequest) -> operations.PlayerDetailsByFreeAgentsResponse:
        r"""Player Details by Free Agents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FreeAgents", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerDetailsByFreeAgentsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def player_game_logs_by_season(self, request: operations.PlayerGameLogsBySeasonRequest) -> operations.PlayerGameLogsBySeasonResponse:
        r"""Player Game Logs By Season
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameLogsBySeasonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_games = out

        return res

    
    def player_game_stats_by_date(self, request: operations.PlayerGameStatsByDateRequest) -> operations.PlayerGameStatsByDateResponse:
        r"""Player Game Stats by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameStatsByDate/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameStatsByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_games = out

        return res

    
    def player_game_stats_by_player(self, request: operations.PlayerGameStatsByPlayerRequest) -> operations.PlayerGameStatsByPlayerResponse:
        r"""Player Game Stats by Player
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameStatsByPlayer/{date}/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameStatsByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.player_game = out

        return res

    
    def player_season_away_stats(self, request: operations.PlayerSeasonAwayStatsRequest) -> operations.PlayerSeasonAwayStatsResponse:
        r"""Player Season Away Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonAwayStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonAwayStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

        return res

    
    def player_season_home_stats(self, request: operations.PlayerSeasonHomeStatsRequest) -> operations.PlayerSeasonHomeStatsResponse:
        r"""Player Season Home Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonHomeStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonHomeStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

        return res

    
    def player_season_split_stats(self, request: operations.PlayerSeasonSplitStatsRequest) -> operations.PlayerSeasonSplitStatsResponse:
        r"""Player Season Split Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonSplitStats/{season}/{split}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonSplitStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

        return res

    
    def player_season_stats(self, request: operations.PlayerSeasonStatsRequest) -> operations.PlayerSeasonStatsResponse:
        r"""Player Season Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

        return res

    
    def player_season_stats_by_player(self, request: operations.PlayerSeasonStatsByPlayerRequest) -> operations.PlayerSeasonStatsByPlayerResponse:
        r"""Player Season Stats By Player
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonStatsByPlayer/{season}/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonStatsByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.player_season = out

        return res

    
    def player_season_stats_by_team(self, request: operations.PlayerSeasonStatsByTeamRequest) -> operations.PlayerSeasonStatsByTeamResponse:
        r"""Player Season Stats by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonStatsByTeam/{season}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonStatsByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

        return res

    
    def player_season_stats_split_by_team(self, request: operations.PlayerSeasonStatsSplitByTeamRequest) -> operations.PlayerSeasonStatsSplitByTeamResponse:
        r"""Player Season Stats Split By Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonStatsSplitByTeam/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonStatsSplitByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

        return res

    
    def players_by_team(self, request: operations.PlayersByTeamRequest) -> operations.PlayersByTeamResponse:
        r"""Players by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Players/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayersByTeamResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def standings(self, request: operations.StandingsRequest) -> operations.StandingsResponse:
        r"""Standings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Standings/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StandingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.standings = out

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

    
    def team_hitting_vs_starting_pitcher(self, request: operations.TeamHittingVsStartingPitcherRequest) -> operations.TeamHittingVsStartingPitcherResponse:
        r"""Team Hitting vs. Starting Pitcher
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/TeamHittersVsPitcher/{gameid}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamHittingVsStartingPitcherResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

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

    
    def teams_active(self, request: operations.TeamsActiveRequest) -> operations.TeamsActiveResponse:
        r"""Teams (Active)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/teams", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.teams = out

        return res

    
    def teams_all(self, request: operations.TeamsAllRequest) -> operations.TeamsAllResponse:
        r"""Teams (All)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/AllTeams", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.teams = out

        return res

    