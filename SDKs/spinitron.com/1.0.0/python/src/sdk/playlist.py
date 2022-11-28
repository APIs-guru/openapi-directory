import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Playlist:
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

    
    def get_playlists(self, request: operations.GetPlaylistsRequest) -> operations.GetPlaylistsResponse:
        r"""Returns playlists optionally filtered by {start} and/or {end} datetimes
        Get Playlists optionally filtered by a datetime range.
        Only past Playlists will be returned (with allowed tolerance equals 1 hour in future).
        
        Ordered chronologically from newest to oldest.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/playlists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaylistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPlaylists200ApplicationJSON])
                res.get_playlists_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_playlists_id_(self, request: operations.GetPlaylistsIDRequest) -> operations.GetPlaylistsIDResponse:
        r"""Get a Playlist by id
        The response object represents the playlist specified by {id}.
        
        Status 404 is returned if a playlist with {id} does not exist or if it does but starts in the future (with allowed tolerance equals 1 hour in future).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaylistsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Playlist])
                res.playlist = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    