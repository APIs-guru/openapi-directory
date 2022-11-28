import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class CategoryLibrary:
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

    
    def endpoint_check_users_saved_albums(self, request: operations.EndpointCheckUsersSavedAlbumsRequest) -> operations.EndpointCheckUsersSavedAlbumsResponse:
        r"""Check User's Saved Albums
        Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-albums - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/albums/contains"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointCheckUsersSavedAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[bool]])
                res.endpoint_check_users_saved_albums_200_application_json_booleans = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_check_users_saved_episodes(self, request: operations.EndpointCheckUsersSavedEpisodesRequest) -> operations.EndpointCheckUsersSavedEpisodesResponse:
        r"""Check User's Saved Episodes
        Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.  
        
        This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-episodes - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/episodes/contains"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointCheckUsersSavedEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[bool]])
                res.endpoint_check_users_saved_episodes_200_application_json_booleans = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_check_users_saved_shows(self, request: operations.EndpointCheckUsersSavedShowsRequest) -> operations.EndpointCheckUsersSavedShowsResponse:
        r"""Check User's Saved Shows
        Check if one or more shows is already saved in the current Spotify user's library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-shows - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/shows/contains"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointCheckUsersSavedShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[bool]])
                res.endpoint_check_users_saved_shows_200_application_json_booleans = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_check_users_saved_tracks(self, request: operations.EndpointCheckUsersSavedTracksRequest) -> operations.EndpointCheckUsersSavedTracksResponse:
        r"""Check User's Saved Tracks
        Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-tracks - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/tracks/contains"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointCheckUsersSavedTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[bool]])
                res.endpoint_check_users_saved_tracks_200_application_json_booleans = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_users_saved_albums(self, request: operations.EndpointGetUsersSavedAlbumsRequest) -> operations.EndpointGetUsersSavedAlbumsResponse:
        r"""Get User's Saved Albums
        Get a list of the albums saved in the current Spotify user's 'Your Music' library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-albums - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/albums"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetUsersSavedAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetUsersSavedAlbums200ApplicationJSON])
                res.endpoint_get_users_saved_albums_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_users_saved_episodes(self, request: operations.EndpointGetUsersSavedEpisodesRequest) -> operations.EndpointGetUsersSavedEpisodesResponse:
        r"""Get User's Saved Episodes
        Get a list of the episodes saved in the current Spotify user's library.  
        
        This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-episodes - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/episodes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetUsersSavedEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetUsersSavedEpisodes200ApplicationJSON])
                res.endpoint_get_users_saved_episodes_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_users_saved_shows(self, request: operations.EndpointGetUsersSavedShowsRequest) -> operations.EndpointGetUsersSavedShowsResponse:
        r"""Get User's Saved Shows
        Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-shows - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/shows"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetUsersSavedShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetUsersSavedShows200ApplicationJSON])
                res.endpoint_get_users_saved_shows_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_users_saved_tracks(self, request: operations.EndpointGetUsersSavedTracksRequest) -> operations.EndpointGetUsersSavedTracksResponse:
        r"""Get User's Saved Tracks
        Get a list of the songs saved in the current Spotify user's 'Your Music' library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-tracks - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/tracks"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetUsersSavedTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetUsersSavedTracks200ApplicationJSON])
                res.endpoint_get_users_saved_tracks_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_remove_albums_user(self, request: operations.EndpointRemoveAlbumsUserRequest) -> operations.EndpointRemoveAlbumsUserResponse:
        r"""Remove Albums for Current User
        Remove one or more albums from the current user's 'Your Music' library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-albums-user - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/albums"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointRemoveAlbumsUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_remove_episodes_user(self, request: operations.EndpointRemoveEpisodesUserRequest) -> operations.EndpointRemoveEpisodesUserResponse:
        r"""Remove User's Saved Episodes
        Remove one or more episodes from the current user's library.  
        
        This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-episodes-user - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/episodes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointRemoveEpisodesUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_remove_shows_user(self, request: operations.EndpointRemoveShowsUserRequest) -> operations.EndpointRemoveShowsUserResponse:
        r"""Remove User's Saved Shows
        Delete one or more shows from current Spotify user's library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-shows-user - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/shows"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointRemoveShowsUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_remove_tracks_user(self, request: operations.EndpointRemoveTracksUserRequest) -> operations.EndpointRemoveTracksUserResponse:
        r"""Remove User's Saved Tracks
        Remove one or more tracks from the current user's 'Your Music' library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-tracks-user - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/tracks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointRemoveTracksUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_save_albums_user(self, request: operations.EndpointSaveAlbumsUserRequest) -> operations.EndpointSaveAlbumsUserResponse:
        r"""Save Albums for Current User
        Save one or more albums to the current user's 'Your Music' library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-albums-user - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/albums"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointSaveAlbumsUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_save_episodes_user(self, request: operations.EndpointSaveEpisodesUserRequest) -> operations.EndpointSaveEpisodesUserResponse:
        r"""Save Episodes for User
        Save one or more episodes to the current user's library.  
        
        This API endpoint is in **beta** and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-episodes-user - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/episodes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointSaveEpisodesUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_save_shows_user(self, request: operations.EndpointSaveShowsUserRequest) -> operations.EndpointSaveShowsUserResponse:
        r"""Save Shows for Current User
        Save one or more shows to current Spotify user's library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-shows-user - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/shows"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointSaveShowsUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_save_tracks_user(self, request: operations.EndpointSaveTracksUserRequest) -> operations.EndpointSaveTracksUserResponse:
        r"""Save Tracks for User
        Save one or more tracks to the current user's 'Your Music' library.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-tracks-user - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/tracks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointSaveTracksUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    