import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Event:
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

    
    def get_event(self, request: operations.GetEventRequest) -> operations.GetEventResponse:
        r"""Gets an Event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_alliances(self, request: operations.GetEventAlliancesRequest) -> operations.GetEventAlliancesResponse:
        r"""Gets a list of Elimination Alliances for the given Event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/alliances", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventAlliancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EliminationAlliance]])
                res.elimination_alliances = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_awards(self, request: operations.GetEventAwardsRequest) -> operations.GetEventAwardsResponse:
        r"""Gets a list of awards from the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/awards", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventAwardsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_event_insights(self, request: operations.GetEventInsightsRequest) -> operations.GetEventInsightsResponse:
        r"""Gets a set of Event-specific insights for the given Event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/insights", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventInsightsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventInsights])
                res.event_insights = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_match_timeseries(self, request: operations.GetEventMatchTimeseriesRequest) -> operations.GetEventMatchTimeseriesResponse:
        r"""Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
        *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
        *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/matches/timeseries", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventMatchTimeseriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_event_match_timeseries_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_matches(self, request: operations.GetEventMatchesRequest) -> operations.GetEventMatchesResponse:
        r"""Gets a list of matches for the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/matches", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventMatchesResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_event_matches_keys(self, request: operations.GetEventMatchesKeysRequest) -> operations.GetEventMatchesKeysResponse:
        r"""Gets a list of match keys for the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/matches/keys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventMatchesKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_event_matches_keys_200_application_json_strings = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_matches_simple(self, request: operations.GetEventMatchesSimpleRequest) -> operations.GetEventMatchesSimpleResponse:
        r"""Gets a short-form list of matches for the given event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/matches/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventMatchesSimpleResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_event_op_rs(self, request: operations.GetEventOpRsRequest) -> operations.GetEventOpRsResponse:
        r"""Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/oprs", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventOpRsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventOpRs])
                res.event_op_rs = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_predictions(self, request: operations.GetEventPredictionsRequest) -> operations.GetEventPredictionsResponse:
        r"""Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/predictions", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventPredictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.event_predictions = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_rankings(self, request: operations.GetEventRankingsRequest) -> operations.GetEventRankingsResponse:
        r"""Gets a list of team rankings for the Event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/rankings", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventRankingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventRanking])
                res.event_ranking = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_event_simple(self, request: operations.GetEventSimpleRequest) -> operations.GetEventSimpleResponse:
        r"""Gets a short-form Event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/event/{event_key}/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventSimple])
                res.event_simple = out
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

    