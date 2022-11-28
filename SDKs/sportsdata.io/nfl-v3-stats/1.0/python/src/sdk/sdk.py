

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

    
    def box_score_by_scoreid_v(self, request: operations.BoxScoreByScoreidVRequest) -> operations.BoxScoreByScoreidVResponse:
        r"""Box Score by ScoreID V3
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScoreByScoreIDV3/{scoreid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BoxScoreByScoreidVResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.box_score_v3 = out

        return res

    
    def box_score_v(self, request: operations.BoxScoreVRequest) -> operations.BoxScoreVResponse:
        r"""Box Score V3
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScoreV3/{season}/{week}/{hometeam}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BoxScoreVResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.box_score_v3 = out

        return res

    
    def box_scores_delta_v(self, request: operations.BoxScoresDeltaVRequest) -> operations.BoxScoresDeltaVResponse:
        r"""Box Scores Delta V3
        This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScoresDeltaV3/{season}/{week}/{playerstoinclude}/{minutes}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BoxScoresDeltaVResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_score_v3s = out

        return res

    
    def box_scores_v_simulation(self, request: operations.BoxScoresVSimulationRequest) -> operations.BoxScoresVSimulationResponse:
        r"""Box Scores V3 Simulation
        Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/SimulatedBoxScoresV3/{numberofplays}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BoxScoresVSimulationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_score_v3s = out

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

    
    def daily_fantasy_players(self, request: operations.DailyFantasyPlayersRequest) -> operations.DailyFantasyPlayersResponse:
        r"""Daily Fantasy Players
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/DailyFantasyPlayers/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DailyFantasyPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.daily_fantasy_players = out

        return res

    
    def daily_fantasy_scoring(self, request: operations.DailyFantasyScoringRequest) -> operations.DailyFantasyScoringResponse:
        r"""Daily Fantasy Scoring
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/DailyFantasyPoints/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DailyFantasyScoringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.daily_fantasy_scorings = out

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

    
    def fantasy_defense_game_stats(self, request: operations.FantasyDefenseGameStatsRequest) -> operations.FantasyDefenseGameStatsResponse:
        r"""Fantasy Defense Game Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FantasyDefenseByGame/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FantasyDefenseGameStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.fantasy_defense_games = out

        return res

    
    def fantasy_defense_game_stats_by_team(self, request: operations.FantasyDefenseGameStatsByTeamRequest) -> operations.FantasyDefenseGameStatsByTeamResponse:
        r"""Fantasy Defense Game Stats by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FantasyDefenseByGameByTeam/{season}/{week}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FantasyDefenseGameStatsByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.fantasy_defense_game = out

        return res

    
    def fantasy_defense_season_stats(self, request: operations.FantasyDefenseSeasonStatsRequest) -> operations.FantasyDefenseSeasonStatsResponse:
        r"""Fantasy Defense Season Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FantasyDefenseBySeason/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FantasyDefenseSeasonStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.fantasy_defense_seasons = out

        return res

    
    def fantasy_defense_season_stats_by_team(self, request: operations.FantasyDefenseSeasonStatsByTeamRequest) -> operations.FantasyDefenseSeasonStatsByTeamResponse:
        r"""Fantasy Defense Season Stats by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FantasyDefenseBySeasonByTeam/{season}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FantasyDefenseSeasonStatsByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.fantasy_defense_season = out

        return res

    
    def fantasy_player_ownership_percentages_season_long(self, request: operations.FantasyPlayerOwnershipPercentagesSeasonLongRequest) -> operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse:
        r"""Fantasy Player Ownership Percentages (Season-Long)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerOwnership/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_ownerships = out

        return res

    
    def fantasy_players_with_adp(self, request: operations.FantasyPlayersWithAdpRequest) -> operations.FantasyPlayersWithAdpResponse:
        r"""Fantasy Players with ADP
        This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FantasyPlayers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FantasyPlayersWithAdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.fantasy_players = out

        return res

    
    def game_stats_by_season_deprecated_use_team_game_stats_instead(self, request: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest) -> operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse:
        r"""Game Stats by Season (Deprecated, use Team Game Stats instead)
        Game stats for a specified season.
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
        Game stats for a specified season and week.
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

    
    def idp_fantasy_players_with_adp(self, request: operations.IdpFantasyPlayersWithAdpRequest) -> operations.IdpFantasyPlayersWithAdpResponse:
        r"""IDP Fantasy Players with ADP
        This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FantasyPlayersIDP", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IdpFantasyPlayersWithAdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.fantasy_players = out

        return res

    
    def injuries(self, request: operations.InjuriesRequest) -> operations.InjuriesResponse:
        r"""Injuries
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Injuries/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InjuriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.injuries = out

        return res

    
    def injuries_by_team(self, request: operations.InjuriesByTeamRequest) -> operations.InjuriesByTeamResponse:
        r"""Injuries by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Injuries/{season}/{week}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InjuriesByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.injuries = out

        return res

    
    def league_leaders_by_season(self, request: operations.LeagueLeadersBySeasonRequest) -> operations.LeagueLeadersBySeasonResponse:
        r"""League Leaders by Season
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/SeasonLeagueLeaders/{season}/{position}/{column}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LeagueLeadersBySeasonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

        return res

    
    def league_leaders_by_week(self, request: operations.LeagueLeadersByWeekRequest) -> operations.LeagueLeadersByWeekResponse:
        r"""League Leaders by Week
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/GameLeagueLeaders/{season}/{week}/{position}/{column}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LeagueLeadersByWeekResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_games = out

        return res

    
    def legacy_box_score(self, request: operations.LegacyBoxScoreRequest) -> operations.LegacyBoxScoreResponse:
        r"""Legacy Box Score
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScore/{season}/{week}/{hometeam}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LegacyBoxScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.box_score = out

        return res

    
    def legacy_box_scores(self, request: operations.LegacyBoxScoresRequest) -> operations.LegacyBoxScoresResponse:
        r"""Legacy Box Scores
        This method returns all box scores for a given season and week.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScores/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LegacyBoxScoresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_scores = out

        return res

    
    def legacy_box_scores_active(self, request: operations.LegacyBoxScoresActiveRequest) -> operations.LegacyBoxScoresActiveResponse:
        r"""Legacy Box Scores Active
        This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/ActiveBoxScores", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LegacyBoxScoresActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_scores = out

        return res

    
    def legacy_box_scores_delta(self, request: operations.LegacyBoxScoresDeltaRequest) -> operations.LegacyBoxScoresDeltaResponse:
        r"""Legacy Box Scores Delta
        This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScoresDelta/{season}/{week}/{minutes}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LegacyBoxScoresDeltaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_scores = out

        return res

    
    def legacy_box_scores_delta_current_week(self, request: operations.LegacyBoxScoresDeltaCurrentWeekRequest) -> operations.LegacyBoxScoresDeltaCurrentWeekResponse:
        r"""Legacy Box Scores Delta (Current Week)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/RecentlyUpdatedBoxScores/{minutes}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LegacyBoxScoresDeltaCurrentWeekResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_scores = out

        return res

    
    def legacy_box_scores_final(self, request: operations.LegacyBoxScoresFinalRequest) -> operations.LegacyBoxScoresFinalResponse:
        r"""Legacy Box Scores Final
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/FinalBoxScores", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LegacyBoxScoresFinalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_scores = out

        return res

    
    def legacy_box_scores_live(self, request: operations.LegacyBoxScoresLiveRequest) -> operations.LegacyBoxScoresLiveResponse:
        r"""Legacy Box Scores Live
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/LiveBoxScores", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LegacyBoxScoresLiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_scores = out

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

    
    def player_game_red_zone_stats(self, request: operations.PlayerGameRedZoneStatsRequest) -> operations.PlayerGameRedZoneStatsResponse:
        r"""Player Game Red Zone Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameRedZoneStats/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameRedZoneStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_game_red_zones = out

        return res

    
    def player_game_red_zone_stats_inside_five(self, request: operations.PlayerGameRedZoneStatsInsideFiveRequest) -> operations.PlayerGameRedZoneStatsInsideFiveResponse:
        r"""Player Game Red Zone Stats Inside Five
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameRedZoneInsideFiveStats/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameRedZoneStatsInsideFiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_game_red_zones = out

        return res

    
    def player_game_red_zone_stats_inside_ten(self, request: operations.PlayerGameRedZoneStatsInsideTenRequest) -> operations.PlayerGameRedZoneStatsInsideTenResponse:
        r"""Player Game Red Zone Stats Inside Ten
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameRedZoneInsideTenStats/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameRedZoneStatsInsideTenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_game_red_zones = out

        return res

    
    def player_game_stats_by_player(self, request: operations.PlayerGameStatsByPlayerRequest) -> operations.PlayerGameStatsByPlayerResponse:
        r"""Player Game Stats by Player
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameStatsByPlayerID/{season}/{week}/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameStatsByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.player_game = out

        return res

    
    def player_game_stats_by_team(self, request: operations.PlayerGameStatsByTeamRequest) -> operations.PlayerGameStatsByTeamResponse:
        r"""Player Game Stats by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameStatsByTeam/{season}/{week}/{team}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameStatsByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_games = out

        return res

    
    def player_game_stats_by_week(self, request: operations.PlayerGameStatsByWeekRequest) -> operations.PlayerGameStatsByWeekResponse:
        r"""Player Game Stats by Week
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameStatsByWeek/{season}/{week}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameStatsByWeekResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_games = out

        return res

    
    def player_game_stats_by_week_delta(self, request: operations.PlayerGameStatsByWeekDeltaRequest) -> operations.PlayerGameStatsByWeekDeltaResponse:
        r"""Player Game Stats by Week Delta
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameStatsByWeekDelta/{season}/{week}/{minutes}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameStatsByWeekDeltaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_games = out

        return res

    
    def player_game_stats_delta(self, request: operations.PlayerGameStatsDeltaRequest) -> operations.PlayerGameStatsDeltaResponse:
        r"""Player Game Stats Delta
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerGameStatsDelta/{minutes}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerGameStatsDeltaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_games = out

        return res

    
    def player_season_red_zone_stats(self, request: operations.PlayerSeasonRedZoneStatsRequest) -> operations.PlayerSeasonRedZoneStatsResponse:
        r"""Player Season Red Zone Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonRedZoneStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonRedZoneStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_season_red_zones = out

        return res

    
    def player_season_red_zone_stats_inside_five(self, request: operations.PlayerSeasonRedZoneStatsInsideFiveRequest) -> operations.PlayerSeasonRedZoneStatsInsideFiveResponse:
        r"""Player Season Red Zone Stats Inside Five
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonRedZoneInsideFiveStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonRedZoneStatsInsideFiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_season_red_zones = out

        return res

    
    def player_season_red_zone_stats_inside_ten(self, request: operations.PlayerSeasonRedZoneStatsInsideTenRequest) -> operations.PlayerSeasonRedZoneStatsInsideTenResponse:
        r"""Player Season Red Zone Stats Inside Ten
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonRedZoneInsideTenStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonRedZoneStatsInsideTenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_season_red_zones = out

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
        r"""Player Season Stats by Player
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonStatsByPlayerID/{season}/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonStatsByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_seasons = out

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

    
    def player_season_third_down_stats(self, request: operations.PlayerSeasonThirdDownStatsRequest) -> operations.PlayerSeasonThirdDownStatsResponse:
        r"""Player Season Third Down Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayerSeasonThirdDownStats/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSeasonThirdDownStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_season_third_downs = out

        return res

    
    def pro_bowlers(self, request: operations.ProBowlersRequest) -> operations.ProBowlersResponse:
        r"""Pro Bowlers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/ProBowlers/{season}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProBowlersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.player_infos = out

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

    