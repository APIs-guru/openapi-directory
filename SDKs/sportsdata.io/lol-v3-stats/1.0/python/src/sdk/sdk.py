

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
        Areas (Countries)
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

    
    def box_score(self, request: operations.BoxScoreRequest) -> operations.BoxScoreResponse:
        r"""Box Score
        Games by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/BoxScore/{gameid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BoxScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.box_scores = out

        return res

    
    def box_scores_by_date(self, request: operations.BoxScoresByDateRequest) -> operations.BoxScoresByDateResponse:
        r"""Box Scores by Date
        Games by Date
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

    
    def champions(self, request: operations.ChampionsRequest) -> operations.ChampionsResponse:
        r"""Champions
        Areas (Countries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Champions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChampionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.champions = out

        return res

    
    def competition_fixtures_league_details(self, request: operations.CompetitionFixturesLeagueDetailsRequest) -> operations.CompetitionFixturesLeagueDetailsResponse:
        r"""Competition Fixtures (League Details)
        Competition Fixtures (League Details)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/CompetitionDetails/{competitionid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompetitionFixturesLeagueDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.competition_detail = out

        return res

    
    def competitions_leagues(self, request: operations.CompetitionsLeaguesRequest) -> operations.CompetitionsLeaguesResponse:
        r"""Competitions (Leagues)
        Competitions (Leagues)
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
        Games by Date
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

    
    def items(self, request: operations.ItemsRequest) -> operations.ItemsResponse:
        r"""Items
        Competitions (Leagues)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Items", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.items = out

        return res

    
    def memberships_active(self, request: operations.MembershipsActiveRequest) -> operations.MembershipsActiveResponse:
        r"""Memberships (Active)
        Memberships (Active)
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

    
    def memberships_by_team_active(self, request: operations.MembershipsByTeamActiveRequest) -> operations.MembershipsByTeamActiveResponse:
        r"""Memberships by Team (Active)
        Memberships by Team (Active)
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
        Memberships by Team (Historical)
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
        Memberships (Historical)
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

    
    def player(self, request: operations.PlayerRequest) -> operations.PlayerResponse:
        r"""Player
        Player
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
        Players
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
        Players by Team
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
        Schedule
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
        Season Teams
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

    
    def spells(self, request: operations.SpellsRequest) -> operations.SpellsResponse:
        r"""Spells
        Areas (Countries)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}/Spells", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SpellsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.spells = out

        return res

    
    def standings(self, request: operations.StandingsRequest) -> operations.StandingsResponse:
        r"""Standings
        Standings
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

    
    def teams(self, request: operations.TeamsRequest) -> operations.TeamsResponse:
        r"""Teams
        Teams
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

    
    def venues(self, request: operations.VenuesRequest) -> operations.VenuesResponse:
        r"""Venues
        Venues
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

    