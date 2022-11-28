import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class WatchLaterQueueEssentials:
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

    
    def add_video_to_watch_later(self, request: operations.AddVideoToWatchLaterRequest) -> operations.AddVideoToWatchLaterResponse:
        r"""Add a video to a user's Watch Later queue
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/watchlater/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoToWatchLaterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def add_video_to_watch_later_alt1(self, request: operations.AddVideoToWatchLaterAlt1Request) -> operations.AddVideoToWatchLaterAlt1Response:
        r"""Add a video to a user's Watch Later queue
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/watchlater/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoToWatchLaterAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def check_watch_later_queue(self, request: operations.CheckWatchLaterQueueRequest) -> operations.CheckWatchLaterQueueResponse:
        r"""Check if a user has added a specific video to their Watch Later queue
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/watchlater/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckWatchLaterQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def check_watch_later_queue_alt1(self, request: operations.CheckWatchLaterQueueAlt1Request) -> operations.CheckWatchLaterQueueAlt1Response:
        r"""Check if a user has added a specific video to their Watch Later queue
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/watchlater/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckWatchLaterQueueAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_video_from_watch_later(self, request: operations.DeleteVideoFromWatchLaterRequest) -> operations.DeleteVideoFromWatchLaterResponse:
        r"""Remove a video from a user's Watch Later queue
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/watchlater/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoFromWatchLaterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_video_from_watch_later_alt1(self, request: operations.DeleteVideoFromWatchLaterAlt1Request) -> operations.DeleteVideoFromWatchLaterAlt1Response:
        r"""Remove a video from a user's Watch Later queue
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/watchlater/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoFromWatchLaterAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_watch_later_queue(self, request: operations.GetWatchLaterQueueRequest) -> operations.GetWatchLaterQueueResponse:
        r"""Get all the videos in a user's Watch Later queue
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/watchlater", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWatchLaterQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out
        elif r.status_code == 304:
            pass

        return res

    
    def get_watch_later_queue_alt1(self, request: operations.GetWatchLaterQueueAlt1Request) -> operations.GetWatchLaterQueueAlt1Response:
        r"""Get all the videos in a user's Watch Later queue
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/watchlater"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWatchLaterQueueAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out
        elif r.status_code == 304:
            pass

        return res

    