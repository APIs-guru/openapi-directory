import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class CategoryPlaylists:
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

    
    def endpoint_add_tracks_to_playlist(self, request: operations.EndpointAddTracksToPlaylistRequest) -> operations.EndpointAddTracksToPlaylistResponse:
        r"""Add Items to a Playlist
        Add one or more items to a user's playlist.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-tracks-to-playlist - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/tracks", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointAddTracksToPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnapshotIDObject])
                res.snapshot_id_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_change_playlist_details(self, request: operations.EndpointChangePlaylistDetailsRequest) -> operations.EndpointChangePlaylistDetailsResponse:
        r"""Change a Playlist's Details
        Change a playlist's name and public/private state. (The user must, of
        course, own the playlist.)
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-change-playlist-details - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointChangePlaylistDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_create_playlist(self, request: operations.EndpointCreatePlaylistRequest) -> operations.EndpointCreatePlaylistResponse:
        r"""Create a Playlist
        Create a playlist for a Spotify user. (The playlist will be empty until
        you [add tracks](https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-tracks-to-playlist).)
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-create-playlist - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/playlists", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointCreatePlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistObject])
                res.playlist_object = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistObject])
                res.playlist_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_a_list_of_current_users_playlists(self, request: operations.EndpointGetAListOfCurrentUsersPlaylistsRequest) -> operations.EndpointGetAListOfCurrentUsersPlaylistsResponse:
        r"""Get a List of Current User's Playlists
        Get a list of the playlists owned or followed by the current Spotify
        user.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-list-of-current-users-playlists - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/playlists"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAListOfCurrentUsersPlaylistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON])
                res.endpoint_get_a_list_of_current_users_playlists_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_list_users_playlists(self, request: operations.EndpointGetListUsersPlaylistsRequest) -> operations.EndpointGetListUsersPlaylistsResponse:
        r"""Get a List of a User's Playlists
        Get a list of the playlists owned or followed by a Spotify user.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-list-users-playlists - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/playlists", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetListUsersPlaylistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetListUsersPlaylists200ApplicationJSON])
                res.endpoint_get_list_users_playlists_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_playlist(self, request: operations.EndpointGetPlaylistRequest) -> operations.EndpointGetPlaylistResponse:
        r"""Get a Playlist
        Get a playlist owned by a Spotify user.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistObject])
                res.playlist_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_playlist_cover(self, request: operations.EndpointGetPlaylistCoverRequest) -> operations.EndpointGetPlaylistCoverResponse:
        r"""Get a Playlist Cover Image
        Get the current image associated with a specific playlist.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist-cover - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/images", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetPlaylistCoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageObject]])
                res.image_objects = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_playlists_tracks(self, request: operations.EndpointGetPlaylistsTracksRequest) -> operations.EndpointGetPlaylistsTracksResponse:
        r"""Get a Playlist's Items
        Get full details of the items of a playlist owned by a Spotify user.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/tracks", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetPlaylistsTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetPlaylistsTracks200ApplicationJSON])
                res.endpoint_get_playlists_tracks_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_remove_tracks_playlist(self, request: operations.EndpointRemoveTracksPlaylistRequest) -> operations.EndpointRemoveTracksPlaylistResponse:
        r"""Remove Items from a Playlist
        Remove one or more items from a user's playlist.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-tracks-playlist - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/tracks", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointRemoveTracksPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnapshotIDObject])
                res.snapshot_id_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_reorder_or_replace_playlists_tracks(self, request: operations.EndpointReorderOrReplacePlaylistsTracksRequest) -> operations.EndpointReorderOrReplacePlaylistsTracksResponse:
        r"""Reorder or Replace a Playlist's Items
        Either reorder or replace items in a playlist depending on the request's parameters.
        To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
        To replace items, include `uris` as either a query parameter or in the request's body.
        Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
        
        
        **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
        These operations can't be applied together in a single request.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-reorder-or-replace-playlists-tracks - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/tracks", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointReorderOrReplacePlaylistsTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnapshotIDObject])
                res.snapshot_id_object = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnapshotIDObject])
                res.snapshot_id_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_upload_custom_playlist_cover(self, request: operations.EndpointUploadCustomPlaylistCoverRequest) -> operations.EndpointUploadCustomPlaylistCoverResponse:
        r"""Upload a Custom Playlist Cover Image
        Replace the image used to represent a specific playlist.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-upload-custom-playlist-cover - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/images", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointUploadCustomPlaylistCoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    