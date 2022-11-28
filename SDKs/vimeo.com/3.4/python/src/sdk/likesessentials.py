import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class LikesEssentials:
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

    
    def check_if_user_liked_video(self, request: operations.CheckIfUserLikedVideoRequest) -> operations.CheckIfUserLikedVideoResponse:
        r"""Check if a user has liked a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/likes/{video_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfUserLikedVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def check_if_user_liked_video_alt1(self, request: operations.CheckIfUserLikedVideoAlt1Request) -> operations.CheckIfUserLikedVideoAlt1Response:
        r"""Check if a user has liked a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/likes/{video_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfUserLikedVideoAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_likes(self, request: operations.GetLikesRequest) -> operations.GetLikesResponse:
        r"""Get all the videos that a user has liked
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/likes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLikesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out

        return res

    
    def get_likes_alt1(self, request: operations.GetLikesAlt1Request) -> operations.GetLikesAlt1Response:
        r"""Get all the videos that a user has liked
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/likes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLikesAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out

        return res

    
    def get_video_likes(self, request: operations.GetVideoLikesRequest) -> operations.GetVideoLikesResponse:
        r"""Get all the users who have liked a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/likes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoLikesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out

        return res

    
    def get_video_likes_alt1(self, request: operations.GetVideoLikesAlt1Request) -> operations.GetVideoLikesAlt1Response:
        r"""Get all the users who have liked a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/videos/{video_id}/likes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoLikesAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out

        return res

    
    def get_vod_likes(self, request: operations.GetVodLikesRequest) -> operations.GetVodLikesResponse:
        r"""Get all the users who have liked a video on an On Demand page
        This method gets all the users who have liked a particular video on an On Demand page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/likes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodLikesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out

        return res

    
    def like_video(self, request: operations.LikeVideoRequest) -> operations.LikeVideoResponse:
        r"""Cause a user to like a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/likes/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LikeVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def like_video_alt1(self, request: operations.LikeVideoAlt1Request) -> operations.LikeVideoAlt1Response:
        r"""Cause a user to like a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/likes/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LikeVideoAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def unlike_video(self, request: operations.UnlikeVideoRequest) -> operations.UnlikeVideoResponse:
        r"""Cause a user to unlike a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/likes/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnlikeVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def unlike_video_alt1(self, request: operations.UnlikeVideoAlt1Request) -> operations.UnlikeVideoAlt1Response:
        r"""Cause a user to unlike a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/likes/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnlikeVideoAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    