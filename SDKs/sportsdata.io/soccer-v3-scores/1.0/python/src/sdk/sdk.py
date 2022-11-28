

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
        
    
    
    
    def areas_countries(self, request: operations.AreasCountriesRequest) -> operations.AreasCountriesResponse:
        r"""Areas (Countries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Areas", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AreasCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.areas = out

        return res

    
    def canceled_memberships(self, request: operations.CanceledMembershipsRequest) -> operations.CanceledMembershipsResponse:
        r"""Canceled Memberships
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/CanceledMemberships", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CanceledMembershipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.canceled_membership = out

        return res

    
    def competition_fixtures_league_details(self, request: operations.CompetitionFixturesLeagueDetailsRequest) -> operations.CompetitionFixturesLeagueDetailsResponse:
        r"""Competition Fixtures (League Details)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/CompetitionDetails/{competition}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompetitionFixturesLeagueDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.competition_detail = out

        return res

    
    def competition_hierarchy_league_hierarchy(self, request: operations.CompetitionHierarchyLeagueHierarchyRequest) -> operations.CompetitionHierarchyLeagueHierarchyResponse:
        r"""Competition Hierarchy (League Hierarchy)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/CompetitionHierarchy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompetitionHierarchyLeagueHierarchyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.areas = out

        return res

    
    def competitions_leagues(self, request: operations.CompetitionsLeaguesRequest) -> operations.CompetitionsLeaguesResponse:
        r"""Competitions (Leagues)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Competitions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompetitionsLeaguesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.competitions = out

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

    
    def memberships_active(self, request: operations.MembershipsActiveRequest) -> operations.MembershipsActiveResponse:
        r"""Memberships (Active)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/ActiveMemberships", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MembershipsActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.memberships = out

        return res

    
    def memberships_by_competition_active(self, request: operations.MembershipsByCompetitionActiveRequest) -> operations.MembershipsByCompetitionActiveResponse:
        r"""Memberships by Competition (Active)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/MembershipsByCompetition/{competition}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MembershipsByCompetitionActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.memberships = out

        return res

    
    def memberships_by_competition_historical(self, request: operations.MembershipsByCompetitionHistoricalRequest) -> operations.MembershipsByCompetitionHistoricalResponse:
        r"""Memberships by Competition (Historical)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/HistoricalMembershipsByCompetition/{competition}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MembershipsByCompetitionHistoricalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.memberships = out

        return res

    
    def memberships_by_team_active(self, request: operations.MembershipsByTeamActiveRequest) -> operations.MembershipsByTeamActiveResponse:
        r"""Memberships by Team (Active)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/MembershipsByTeam/{teamid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MembershipsByTeamActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.memberships = out

        return res

    
    def memberships_by_team_historical(self, request: operations.MembershipsByTeamHistoricalRequest) -> operations.MembershipsByTeamHistoricalResponse:
        r"""Memberships by Team (Historical)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/HistoricalMembershipsByTeam/{teamid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MembershipsByTeamHistoricalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.memberships = out

        return res

    
    def memberships_historical(self, request: operations.MembershipsHistoricalRequest) -> operations.MembershipsHistoricalResponse:
        r"""Memberships (Historical)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/HistoricalMemberships", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MembershipsHistoricalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.memberships = out

        return res

    
    def memberships_recently_changed(self, request: operations.MembershipsRecentlyChangedRequest) -> operations.MembershipsRecentlyChangedResponse:
        r"""Memberships (Recently Changed)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/RecentlyChangedMemberships/{days}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MembershipsRecentlyChangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.memberships = out

        return res

    
    def player(self, request: operations.PlayerRequest) -> operations.PlayerResponse:
        r"""Player
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Player/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.player = out

        return res

    
    def players(self, request: operations.PlayersRequest) -> operations.PlayersResponse:
        r"""Players
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Players", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.players = out

        return res

    
    def players_by_team(self, request: operations.PlayersByTeamRequest) -> operations.PlayersByTeamResponse:
        r"""Players by Team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/PlayersByTeam/{teamid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayersByTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.players = out

        return res

    
    def schedule(self, request: operations.ScheduleRequest) -> operations.ScheduleResponse:
        r"""Schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Schedule/{roundid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.games = out

        return res

    
    def season_teams(self, request: operations.SeasonTeamsRequest) -> operations.SeasonTeamsResponse:
        r"""Season Teams
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/SeasonTeams/{seasonid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SeasonTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.season_teams = out

        return res

    
    def standings(self, request: operations.StandingsRequest) -> operations.StandingsResponse:
        r"""Standings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Standings/{roundid}", request.path_params)
        
        
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

    
    def team_season_stats(self, request: operations.TeamSeasonStatsRequest) -> operations.TeamSeasonStatsResponse:
        r"""Team Season Stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/TeamSeasonStats/{roundid}", request.path_params)
        
        
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
        
        url = utils.generate_url(base_url, "/{format}/Teams", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.teams = out

        return res

    
    def upcoming_schedule_by_player(self, request: operations.UpcomingScheduleByPlayerRequest) -> operations.UpcomingScheduleByPlayerResponse:
        r"""Upcoming Schedule By Player
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/UpcomingScheduleByPlayer/{playerid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpcomingScheduleByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.games = out

        return res

    
    def venues(self, request: operations.VenuesRequest) -> operations.VenuesResponse:
        r"""Venues
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Venues", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VenuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.venues = out

        return res

    