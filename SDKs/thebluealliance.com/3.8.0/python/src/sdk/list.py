import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class List:
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

    
    def get_district_events(self, request: operations.GetDistrictEventsRequest) -> operations.GetDistrictEventsResponse:
        r"""Gets a list of events in the given district.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/district/{district_key}/events", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictEventsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_district_events_keys(self, request: operations.GetDistrictEventsKeysRequest) -> operations.GetDistrictEventsKeysResponse:
        r"""Gets a list of event keys for events in the given district.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/district/{district_key}/events/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictEventsKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_district_events_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_district_events_simple(self, request: operations.GetDistrictEventsSimpleRequest) -> operations.GetDistrictEventsSimpleResponse:
        r"""Gets a short-form list of events in the given district.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/district/{district_key}/events/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictEventsSimpleResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_events_by_year(self, request: operations.GetEventsByYearRequest) -> operations.GetEventsByYearResponse:
        r"""Gets a list of events in the given year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/{year}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsByYearResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_events_by_year_keys(self, request: operations.GetEventsByYearKeysRequest) -> operations.GetEventsByYearKeysResponse:
        r"""Gets a list of event keys in the given year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/{year}/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsByYearKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_events_by_year_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_events_by_year_simple(self, request: operations.GetEventsByYearSimpleRequest) -> operations.GetEventsByYearSimpleResponse:
        r"""Gets a short-form list of events in the given year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/{year}/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsByYearSimpleResponse(status_code=r.status_code, content_type=content_type)
        
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

    