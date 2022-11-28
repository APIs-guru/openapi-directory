import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Team:
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

    
    def get_district_rankings(self, request: operations.GetDistrictRankingsRequest) -> operations.GetDistrictRankingsResponse:
        r"""Gets a list of team district rankings for the given district.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/district/{district_key}/rankings", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictRankingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DistrictRanking]])
                res.district_rankings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_district_teams(self, request: operations.GetDistrictTeamsRequest) -> operations.GetDistrictTeamsResponse:
        r"""Gets a list of `Team` objects that competed in events in the given district.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/district/{district_key}/teams", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_district_teams_keys(self, request: operations.GetDistrictTeamsKeysRequest) -> operations.GetDistrictTeamsKeysResponse:
        r"""Gets a list of `Team` objects that competed in events in the given district.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/district/{district_key}/teams/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictTeamsKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_district_teams_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_district_teams_simple(self, request: operations.GetDistrictTeamsSimpleRequest) -> operations.GetDistrictTeamsSimpleResponse:
        r"""Gets a short-form list of `Team` objects that competed in events in the given district.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/district/{district_key}/teams/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictTeamsSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamSimple]])
                res.team_simples = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_teams(self, request: operations.GetEventTeamsRequest) -> operations.GetEventTeamsResponse:
        r"""Gets a list of `Team` objects that competed in the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/teams", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_teams_keys(self, request: operations.GetEventTeamsKeysRequest) -> operations.GetEventTeamsKeysResponse:
        r"""Gets a list of `Team` keys that competed in the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/teams/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventTeamsKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_event_teams_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_teams_simple(self, request: operations.GetEventTeamsSimpleRequest) -> operations.GetEventTeamsSimpleResponse:
        r"""Gets a short-form list of `Team` objects that competed in the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/teams/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventTeamsSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamSimple]])
                res.team_simples = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_teams_statuses(self, request: operations.GetEventTeamsStatusesRequest) -> operations.GetEventTeamsStatusesResponse:
        r"""Gets a key-value list of the event statuses for teams competing at the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/teams/statuses", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventTeamsStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, shared.TeamEventStatus]])
                res.get_event_teams_statuses_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team(self, request: operations.GetTeamRequest) -> operations.GetTeamResponse:
        r"""Gets a `Team` object for the team referenced by the given key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Team])
                res.team = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_awards(self, request: operations.GetTeamAwardsRequest) -> operations.GetTeamAwardsResponse:
        r"""Gets a list of awards the given team has won.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/awards", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamAwardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Award]])
                res.awards = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_awards_by_year(self, request: operations.GetTeamAwardsByYearRequest) -> operations.GetTeamAwardsByYearResponse:
        r"""Gets a list of awards the given team has won in a given year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/awards/{year}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamAwardsByYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Award]])
                res.awards = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_districts(self, request: operations.GetTeamDistrictsRequest) -> operations.GetTeamDistrictsResponse:
        r"""Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/districts", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamDistrictsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DistrictList]])
                res.district_lists = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_event_awards(self, request: operations.GetTeamEventAwardsRequest) -> operations.GetTeamEventAwardsResponse:
        r"""Gets a list of awards the given team won at the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/event/{event_key}/awards", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventAwardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Award]])
                res.awards = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_event_matches(self, request: operations.GetTeamEventMatchesRequest) -> operations.GetTeamEventMatchesResponse:
        r"""Gets a list of matches for the given team and event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/event/{event_key}/matches", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventMatchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Match]])
                res.matches = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_event_matches_keys(self, request: operations.GetTeamEventMatchesKeysRequest) -> operations.GetTeamEventMatchesKeysResponse:
        r"""Gets a list of match keys for matches for the given team and event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/event/{event_key}/matches/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventMatchesKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_team_event_matches_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_event_matches_simple(self, request: operations.GetTeamEventMatchesSimpleRequest) -> operations.GetTeamEventMatchesSimpleResponse:
        r"""Gets a short-form list of matches for the given team and event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/event/{event_key}/matches/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventMatchesSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Match]])
                res.matches = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_event_status(self, request: operations.GetTeamEventStatusRequest) -> operations.GetTeamEventStatusResponse:
        r"""Gets the competition rank and status of the team at the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/event/{event_key}/status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamEventStatus])
                res.team_event_status = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_events(self, request: operations.GetTeamEventsRequest) -> operations.GetTeamEventsResponse:
        r"""Gets a list of all events this team has competed at.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/events", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_events_by_year(self, request: operations.GetTeamEventsByYearRequest) -> operations.GetTeamEventsByYearResponse:
        r"""Gets a list of events this team has competed at in the given year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/events/{year}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventsByYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_events_by_year_keys(self, request: operations.GetTeamEventsByYearKeysRequest) -> operations.GetTeamEventsByYearKeysResponse:
        r"""Gets a list of the event keys for events this team has competed at in the given year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/events/{year}/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventsByYearKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_team_events_by_year_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_events_by_year_simple(self, request: operations.GetTeamEventsByYearSimpleRequest) -> operations.GetTeamEventsByYearSimpleResponse:
        r"""Gets a short-form list of events this team has competed at in the given year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/events/{year}/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventsByYearSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EventSimple]])
                res.event_simples = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_events_keys(self, request: operations.GetTeamEventsKeysRequest) -> operations.GetTeamEventsKeysResponse:
        r"""Gets a list of the event keys for all events this team has competed at.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/events/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventsKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_team_events_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_events_simple(self, request: operations.GetTeamEventsSimpleRequest) -> operations.GetTeamEventsSimpleResponse:
        r"""Gets a short-form list of all events this team has competed at.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/events/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventsSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EventSimple]])
                res.event_simples = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_events_statuses_by_year(self, request: operations.GetTeamEventsStatusesByYearRequest) -> operations.GetTeamEventsStatusesByYearResponse:
        r"""Gets a key-value list of the event statuses for events this team has competed at in the given year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/events/{year}/statuses", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamEventsStatusesByYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, shared.TeamEventStatus]])
                res.get_team_events_statuses_by_year_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_matches_by_year(self, request: operations.GetTeamMatchesByYearRequest) -> operations.GetTeamMatchesByYearResponse:
        r"""Gets a list of matches for the given team and year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/matches/{year}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamMatchesByYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Match]])
                res.matches = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_matches_by_year_keys(self, request: operations.GetTeamMatchesByYearKeysRequest) -> operations.GetTeamMatchesByYearKeysResponse:
        r"""Gets a list of match keys for matches for the given team and year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/matches/{year}/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamMatchesByYearKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_team_matches_by_year_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_matches_by_year_simple(self, request: operations.GetTeamMatchesByYearSimpleRequest) -> operations.GetTeamMatchesByYearSimpleResponse:
        r"""Gets a short-form list of matches for the given team and year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/matches/{year}/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamMatchesByYearSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MatchSimple]])
                res.match_simples = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_media_by_tag(self, request: operations.GetTeamMediaByTagRequest) -> operations.GetTeamMediaByTagResponse:
        r"""Gets a list of Media (videos / pictures) for the given team and tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/media/tag/{media_tag}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamMediaByTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Media]])
                res.media = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_media_by_tag_year(self, request: operations.GetTeamMediaByTagYearRequest) -> operations.GetTeamMediaByTagYearResponse:
        r"""Gets a list of Media (videos / pictures) for the given team, tag and year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/media/tag/{media_tag}/{year}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamMediaByTagYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Media]])
                res.media = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_media_by_year(self, request: operations.GetTeamMediaByYearRequest) -> operations.GetTeamMediaByYearResponse:
        r"""Gets a list of Media (videos / pictures) for the given team and year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/media/{year}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamMediaByYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Media]])
                res.media = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_robots(self, request: operations.GetTeamRobotsRequest) -> operations.GetTeamRobotsResponse:
        r"""Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/robots", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamRobotsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamRobot]])
                res.team_robots = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_simple(self, request: operations.GetTeamSimpleRequest) -> operations.GetTeamSimpleResponse:
        r"""Gets a `Team_Simple` object for the team referenced by the given key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamSimple])
                res.team_simple = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_social_media(self, request: operations.GetTeamSocialMediaRequest) -> operations.GetTeamSocialMediaResponse:
        r"""Gets a list of Media (social media) for the given team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/social_media", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamSocialMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Media]])
                res.media = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_team_years_participated(self, request: operations.GetTeamYearsParticipatedRequest) -> operations.GetTeamYearsParticipatedResponse:
        r"""Gets a list of years in which the team participated in at least one competition.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/team/{team_key}/years_participated", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamYearsParticipatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_team_years_participated_200_application_json_integers = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_teams(self, request: operations.GetTeamsRequest) -> operations.GetTeamsResponse:
        r"""Gets a list of `Team` objects, paginated in groups of 500.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{page_num}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_teams_by_year(self, request: operations.GetTeamsByYearRequest) -> operations.GetTeamsByYearResponse:
        r"""Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{year}/{page_num}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsByYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_teams_by_year_keys(self, request: operations.GetTeamsByYearKeysRequest) -> operations.GetTeamsByYearKeysResponse:
        r"""Gets a list Team Keys that competed in the given year, paginated in groups of 500.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{year}/{page_num}/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsByYearKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_teams_by_year_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_teams_by_year_simple(self, request: operations.GetTeamsByYearSimpleRequest) -> operations.GetTeamsByYearSimpleResponse:
        r"""Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{year}/{page_num}/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsByYearSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamSimple]])
                res.team_simples = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_teams_keys(self, request: operations.GetTeamsKeysRequest) -> operations.GetTeamsKeysResponse:
        r"""Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{page_num}/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_teams_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_teams_simple(self, request: operations.GetTeamsSimpleRequest) -> operations.GetTeamsSimpleResponse:
        r"""Gets a list of short form `Team_Simple` objects, paginated in groups of 500.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{page_num}/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamSimple]])
                res.team_simples = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    