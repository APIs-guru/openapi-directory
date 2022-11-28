

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

    
    def bye_weeks(self, request: operations.ByeWeeksRequest) -> operations.ByeWeeksResponse:
        r"""Bye Weeks
        Get bye weeks for the teams during a specified NFL season. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Byes/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ByeWeeksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.byes = out

        return res

    
    def game_stats_by_season_deprecated_use_team_game_stats_instead(self, request: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest) -> operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse:
        r"""Game Stats by Season (Deprecated, use Team Game Stats instead)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/GameStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.games = out

        return res

    
    def game_stats_by_week_deprecated_use_team_game_stats_instead(self, request: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest) -> operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse:
        r"""Game Stats by Week (Deprecated, use Team Game Stats instead)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/GameStatsByWeek/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def news_by_team(self, request: operations.NewsByTeamRequest) -> operations.NewsByTeamResponse:
        r"""News by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/NewsByTeam/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.news = out

        return res

    
    def player_details_by_available(self, request: operations.PlayerDetailsByAvailableRequest) -> operations.PlayerDetailsByAvailableResponse:
        r"""Player Details by Available
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Players", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerDetailsByAvailableResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.player_detail = out

        return res

    
    def player_details_by_rookie_draft_year(self, request: operations.PlayerDetailsByRookieDraftYearRequest) -> operations.PlayerDetailsByRookieDraftYearResponse:
        r"""Player Details by Rookie Draft Year
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Rookies/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerDetailsByRookieDraftYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.players = out

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
                res.player_details = out

        return res

    
    def referees(self, request: operations.RefereesRequest) -> operations.RefereesResponse:
        r"""Referees
        Returns full list of NFL Referees
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Referees", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RefereesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.referees = out

        return res

    
    def schedule(self, request: operations.ScheduleRequest) -> operations.ScheduleResponse:
        r"""Schedule
        Game schedule for a specified season.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Schedules/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.schedules = out

        return res

    
    def scores_by_date(self, request: operations.ScoresByDateRequest) -> operations.ScoresByDateResponse:
        r"""Scores by Date
        Get game scores for a specified week of a season.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/ScoresByDate/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScoresByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.scores = out

        return res

    
    def scores_by_season(self, request: operations.ScoresBySeasonRequest) -> operations.ScoresBySeasonResponse:
        r"""Scores by Season 
        Game scores for a specified season.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Scores/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScoresBySeasonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.scores = out

        return res

    
    def scores_by_week(self, request: operations.ScoresByWeekRequest) -> operations.ScoresByWeekResponse:
        r"""Scores by Week
        Get game scores for a specified week of a season.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/ScoresByWeek/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScoresByWeekResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.scores = out

        return res

    
    def scores_by_week_simulation(self, request: operations.ScoresByWeekSimulationRequest) -> operations.ScoresByWeekSimulationResponse:
        r"""Scores by Week Simulation
        Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/SimulatedScores/{numberofplays}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScoresByWeekSimulationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.scores = out

        return res

    
    def season_current(self, request: operations.SeasonCurrentRequest) -> operations.SeasonCurrentResponse:
        r"""Season Current
        Year of the current NFL season. This value changes on July 1st. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/CurrentSeason", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SeasonCurrentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.season_current_200_application_json_integer = out

        return res

    
    def season_last_completed(self, request: operations.SeasonLastCompletedRequest) -> operations.SeasonLastCompletedResponse:
        r"""Season Last Completed
        Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/LastCompletedSeason", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SeasonLastCompletedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.season_last_completed_200_application_json_integer = out

        return res

    
    def season_upcoming(self, request: operations.SeasonUpcomingRequest) -> operations.SeasonUpcomingResponse:
        r"""Season Upcoming
        Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/UpcomingSeason", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SeasonUpcomingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.season_upcoming_200_application_json_integer = out

        return res

    
    def stadiums(self, request: operations.StadiumsRequest) -> operations.StadiumsResponse:
        r"""Stadiums
        This method returns all stadiums.
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

    
    def team_game_stats(self, request: operations.TeamGameStatsRequest) -> operations.TeamGameStatsResponse:
        r"""Team Game Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/TeamGameStats/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamGameStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.team_games = out

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
        Gets all active teams.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Teams", request.path_params)
        
        
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
        Gets all teams, including pro bowl teams.
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

    
    def teams_by_season(self, request: operations.TeamsBySeasonRequest) -> operations.TeamsBySeasonResponse:
        r"""Teams by Season
        List of teams playing in a specified season.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Teams/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsBySeasonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.teams = out

        return res

    
    def timeframes(self, request: operations.TimeframesRequest) -> operations.TimeframesResponse:
        r"""Timeframes
        Get detailed information about past, present, and future timeframes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Timeframes/{type}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TimeframesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.timeframes = out

        return res

    
    def week_current(self, request: operations.WeekCurrentRequest) -> operations.WeekCurrentResponse:
        r"""Week Current
        Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/CurrentWeek", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WeekCurrentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.week_current_200_application_json_integer = out

        return res

    
    def week_last_completed(self, request: operations.WeekLastCompletedRequest) -> operations.WeekLastCompletedResponse:
        r"""Week Last Completed
        Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/LastCompletedWeek", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WeekLastCompletedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.week_last_completed_200_application_json_integer = out

        return res

    
    def week_upcoming(self, request: operations.WeekUpcomingRequest) -> operations.WeekUpcomingResponse:
        r"""Week Upcoming
        Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/UpcomingWeek", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WeekUpcomingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.week_upcoming_200_application_json_integer = out

        return res

    
    def x_ping(self, request: operations.XPingRequest) -> operations.XPingResponse:
        r"""X Ping
        Ping NFL API
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Ping/{seconds}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.XPingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.x_ping_200_application_json_any = out

        return res

    