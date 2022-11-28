import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Match:
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

    
    def get_match(self, request: operations.GetMatchRequest) -> operations.GetMatchResponse:
        r"""Gets a `Match` object for the given match key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/match/{match_key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Match])
                res.match = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_match_simple(self, request: operations.GetMatchSimpleRequest) -> operations.GetMatchSimpleResponse:
        r"""Gets a short-form `Match` object for the given match key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/match/{match_key}/simple", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMatchSimpleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MatchSimple])
                res.match_simple = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_match_timeseries(self, request: operations.GetMatchTimeseriesRequest) -> operations.GetMatchTimeseriesResponse:
        r"""Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
        *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
        *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/match/{match_key}/timeseries", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMatchTimeseriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.get_match_timeseries_200_application_json_objects = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_match_zebra(self, request: operations.GetMatchZebraRequest) -> operations.GetMatchZebraResponse:
        r"""Gets Zebra MotionWorks data for a Match for the given match key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/match/{match_key}/zebra_motionworks", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMatchZebraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Zebra])
                res.zebra = out
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

    