import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class VideosViewingPrivacy:
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

    
    def add_video_privacy_user(self, request: operations.AddVideoPrivacyUserRequest) -> operations.AddVideoPrivacyUserResponse:
        r"""Permit a specific user to view a private video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/privacy/users/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoPrivacyUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def add_video_privacy_users(self, request: operations.AddVideoPrivacyUsersRequest) -> operations.AddVideoPrivacyUsersResponse:
        r"""Permit a list of users to view a private video
        The body of this request should follow our
        [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
        a single `URI` field, and the value of this field must be the URI of the user who can view this video.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/privacy/users", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoPrivacyUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out

        return res

    
    def add_video_privacy_users_alt1(self, request: operations.AddVideoPrivacyUsersAlt1Request) -> operations.AddVideoPrivacyUsersAlt1Response:
        r"""Permit a list of users to view a private video
        The body of this request should follow our
        [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
        a single `URI` field, and the value of this field must be the URI of the user who can view this video.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/videos/{video_id}/privacy/users", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoPrivacyUsersAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out

        return res

    
    def delete_video_privacy_user(self, request: operations.DeleteVideoPrivacyUserRequest) -> operations.DeleteVideoPrivacyUserResponse:
        r"""Restrict a user from viewing a private video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/privacy/users/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoPrivacyUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_video_privacy_users(self, request: operations.GetVideoPrivacyUsersRequest) -> operations.GetVideoPrivacyUsersResponse:
        r"""Get all the users who can view a user's private videos by default
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/privacy/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoPrivacyUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_video_privacy_users_alt1(self, request: operations.GetVideoPrivacyUsersAlt1Request) -> operations.GetVideoPrivacyUsersAlt1Response:
        r"""Get all the users who can view a user's private videos by default
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/videos/{video_id}/privacy/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoPrivacyUsersAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    