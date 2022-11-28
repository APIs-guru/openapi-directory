import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CategoryArtists:
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

    
    def endpoint_get_an_artist(self, request: operations.EndpointGetAnArtistRequest) -> operations.EndpointGetAnArtistResponse:
        r"""Get an Artist
        Get Spotify catalog information for a single artist identified by their unique Spotify ID.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artist - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artists/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAnArtistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistObject])
                res.artist_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_an_artists_albums(self, request: operations.EndpointGetAnArtistsAlbumsRequest) -> operations.EndpointGetAnArtistsAlbumsResponse:
        r"""Get an Artist's Albums
        Get Spotify catalog information about an artist's albums.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-albums - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artists/{id}/albums", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAnArtistsAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetAnArtistsAlbums200ApplicationJSON])
                res.endpoint_get_an_artists_albums_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_an_artists_related_artists(self, request: operations.EndpointGetAnArtistsRelatedArtistsRequest) -> operations.EndpointGetAnArtistsRelatedArtistsResponse:
        r"""Get an Artist's Related Artists
        Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/).
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-related-artists - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artists/{id}/related-artists", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAnArtistsRelatedArtistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistsObject])
                res.artists_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_an_artists_top_tracks(self, request: operations.EndpointGetAnArtistsTopTracksRequest) -> operations.EndpointGetAnArtistsTopTracksResponse:
        r"""Get an Artist's Top Tracks
        Get Spotify catalog information about an artist's top tracks by country.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-top-tracks - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artists/{id}/top-tracks", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAnArtistsTopTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TracksObject])
                res.tracks_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_multiple_artists(self, request: operations.EndpointGetMultipleArtistsRequest) -> operations.EndpointGetMultipleArtistsResponse:
        r"""Get Multiple Artists
        Get Spotify catalog information for several artists based on their Spotify IDs.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-artists - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/artists"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetMultipleArtistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistsObject])
                res.artists_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    