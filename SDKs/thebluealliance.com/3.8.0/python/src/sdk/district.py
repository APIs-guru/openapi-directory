import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class District:
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

    
    def get_districts_by_year(self, request: operations.GetDistrictsByYearRequest) -> operations.GetDistrictsByYearResponse:
        r"""Gets a list of districts and their corresponding district key, for the given year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{year}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictsByYearResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_event_district_points(self, request: operations.GetEventDistrictPointsRequest) -> operations.GetEventDistrictPointsResponse:
        r"""Gets a list of team rankings for the Event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/district_points", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventDistrictPointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventDistrictPoints])
                res.event_district_points = out
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

    