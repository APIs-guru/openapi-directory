import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class CategoryFollow:
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

    
    def endpoint_check_current_user_follows(self, request: operations.EndpointCheckCurrentUserFollowsRequest) -> operations.EndpointCheckCurrentUserFollowsResponse:
        r"""Get Following State for Artists/Users
        Check to see if the current user is following one or more artists or other Spotify users.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-current-user-follows - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/following/contains"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointCheckCurrentUserFollowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[bool]])
                res.endpoint_check_current_user_follows_200_application_json_booleans = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_check_if_user_follows_playlist(self, request: operations.EndpointCheckIfUserFollowsPlaylistRequest) -> operations.EndpointCheckIfUserFollowsPlaylistResponse:
        r"""Check if Users Follow a Playlist
        Check to see if one or more Spotify users are following a specified playlist.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-if-user-follows-playlist - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/followers/contains", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointCheckIfUserFollowsPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[bool]])
                res.endpoint_check_if_user_follows_playlist_200_application_json_booleans = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_follow_artists_users(self, request: operations.EndpointFollowArtistsUsersRequest) -> operations.EndpointFollowArtistsUsersResponse:
        r"""Follow Artists or Users
        Add the current user as a follower of one or more artists or other Spotify users.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-follow-artists-users - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/following"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointFollowArtistsUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_follow_playlist(self, request: operations.EndpointFollowPlaylistRequest) -> operations.EndpointFollowPlaylistResponse:
        r"""Follow a Playlist
        Add the current user as a follower of a playlist.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-follow-playlist - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/followers", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointFollowPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_followed(self, request: operations.EndpointGetFollowedRequest) -> operations.EndpointGetFollowedResponse:
        r"""Get User's Followed Artists
        Get the current user's followed artists.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-followed - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/following"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetFollowedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FollowingArtistsObject])
                res.following_artists_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_unfollow_artists_users(self, request: operations.EndpointUnfollowArtistsUsersRequest) -> operations.EndpointUnfollowArtistsUsersResponse:
        r"""Unfollow Artists or Users
        Remove the current user as a follower of one or more artists or other Spotify users.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-unfollow-artists-users - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/following"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointUnfollowArtistsUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_unfollow_playlist(self, request: operations.EndpointUnfollowPlaylistRequest) -> operations.EndpointUnfollowPlaylistResponse:
        r"""Unfollow Playlist
        Remove the current user as a follower of a playlist.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-unfollow-playlist - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/playlists/{playlist_id}/followers", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointUnfollowPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    