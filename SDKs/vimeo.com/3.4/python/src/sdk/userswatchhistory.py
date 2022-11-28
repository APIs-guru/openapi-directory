import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class UsersWatchHistory:
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

    
    def delete_from_watch_history(self, request: operations.DeleteFromWatchHistoryRequest) -> operations.DeleteFromWatchHistoryResponse:
        r"""Delete a specific video from a user's watch history
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/watched/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFromWatchHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_watch_history(self, request: operations.DeleteWatchHistoryRequest) -> operations.DeleteWatchHistoryResponse:
        r"""Delete a user's watch history
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/watched/videos"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWatchHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_watch_history(self, request: operations.GetWatchHistoryRequest) -> operations.GetWatchHistoryResponse:
        r"""Get all the videos that a user has watched
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/watched/videos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWatchHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    