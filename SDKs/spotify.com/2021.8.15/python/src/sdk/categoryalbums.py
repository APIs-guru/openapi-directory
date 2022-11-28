import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CategoryAlbums:
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

    
    def endpoint_get_an_album(self, request: operations.EndpointGetAnAlbumRequest) -> operations.EndpointGetAnAlbumResponse:
        r"""Get an Album
        Get Spotify catalog information for a single album.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-album - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/albums/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAnAlbumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumObject])
                res.album_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_an_albums_tracks(self, request: operations.EndpointGetAnAlbumsTracksRequest) -> operations.EndpointGetAnAlbumsTracksResponse:
        r"""Get an Album's Tracks
        Get Spotify catalog information about an album's tracks.
        Optional parameters can be used to limit the number of tracks returned.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-albums-tracks - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/albums/{id}/tracks", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAnAlbumsTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetAnAlbumsTracks200ApplicationJSON])
                res.endpoint_get_an_albums_tracks_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_multiple_albums(self, request: operations.EndpointGetMultipleAlbumsRequest) -> operations.EndpointGetMultipleAlbumsResponse:
        r"""Get Multiple Albums
        Get Spotify catalog information for multiple albums identified by their Spotify IDs.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-albums - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/albums"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetMultipleAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumsObject])
                res.albums_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    