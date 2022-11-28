import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class VideosTags:
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

    
    def add_video_tag(self, request: operations.AddVideoTagRequest) -> operations.AddVideoTagResponse:
        r"""Add a specific tag to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/tags/{word}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def add_video_tags(self, request: operations.AddVideoTagsRequest) -> operations.AddVideoTagsResponse:
        r"""Add a list of tags to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Tag]])
                res.tags = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def check_video_for_tag(self, request: operations.CheckVideoForTagRequest) -> operations.CheckVideoForTagResponse:
        r"""Check if a tag has been added to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/tags/{word}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckVideoForTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_video_tag(self, request: operations.DeleteVideoTagRequest) -> operations.DeleteVideoTagResponse:
        r"""Remove a tag from a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/tags/{word}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_video_tags(self, request: operations.GetVideoTagsRequest) -> operations.GetVideoTagsResponse:
        r"""Get all the tags of a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/tags", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Tag]])
                res.tags = out

        return res

    
    def get_videos_with_tag(self, request: operations.GetVideosWithTagRequest) -> operations.GetVideosWithTagResponse:
        r"""Get all the videos with a specific tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{word}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideosWithTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    