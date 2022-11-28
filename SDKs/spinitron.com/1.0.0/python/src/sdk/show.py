import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Show:
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

    
    def get_shows(self, request: operations.GetShowsRequest) -> operations.GetShowsResponse:
        r"""Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
        **Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
        each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
        Thus scheduled shows have occurences that, for example, may be displayed in a calendar.
        
        In the response, `items` is an array of objects representing occurences of scheduled shows.
        
        You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
        parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
        included in the reponse.
        
        `itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
        {start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
        is included.
        
        If the request omits the {start} parameter, the server sets its value to the current time so that the filter
        range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
        otherwise it is *unbounded*.
        
        For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
        difference between objects in `items` representing a given show will be the `start` field value.
        
        For an unbounded request, `items` includes *only one* occurence per show, specifically, the
        next occurrence after {start} of all shows occuring after {start}.
        
        Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
        of shows expanded into occurrences by thir shedules and repetitions.
        
        Objects in `items` are ordered first by `datetime` and then by `id`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shows"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShows200ApplicationJSON])
                res.get_shows_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_shows_id_(self, request: operations.GetShowsIDRequest) -> operations.GetShowsIDResponse:
        r"""Get a Show by id
        The response object represents the next occurence of the show specified by {id}.
        
        Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shows/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShowsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Show])
                res.show = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    