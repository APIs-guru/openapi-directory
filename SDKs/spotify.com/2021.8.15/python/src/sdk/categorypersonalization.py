import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CategoryPersonalization:
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

    
    def endpoint_get_users_top_artists_and_tracks(self, request: operations.EndpointGetUsersTopArtistsAndTracksRequest) -> operations.EndpointGetUsersTopArtistsAndTracksResponse:
        r"""Get a User's Top Artists and Tracks
        Get the current user's top artists or tracks based on calculated affinity.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-top-artists-and-tracks - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/top/{type}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetUsersTopArtistsAndTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetUsersTopArtistsAndTracks200ApplicationJSON])
                res.endpoint_get_users_top_artists_and_tracks_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    