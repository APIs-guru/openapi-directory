import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class CategoriesVideos:
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

    
    def check_category_for_video(self, request: operations.CheckCategoryForVideoRequest) -> operations.CheckCategoryForVideoResponse:
        r"""Check for a video in a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{category}/videos/{video_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckCategoryForVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_category_videos(self, request: operations.GetCategoryVideosRequest) -> operations.GetCategoryVideosResponse:
        r"""Get all the videos in a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{category}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoryVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_video_categories(self, request: operations.GetVideoCategoriesRequest) -> operations.GetVideoCategoriesResponse:
        r"""Get all the categories to which a video belongs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/categories", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Category]])
                res.categories = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def suggest_video_category(self, request: operations.SuggestVideoCategoryRequest) -> operations.SuggestVideoCategoryResponse:
        r"""Suggest categories for a video
        With this method, you can suggest up to two categories and one subcategory for a video. Vimeo makes the final determination about whether the video
        belongs in these categories.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/categories", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SuggestVideoCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Category])
                res.category = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    