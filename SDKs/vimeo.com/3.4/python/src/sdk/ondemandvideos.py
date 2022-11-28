import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class OnDemandVideos:
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

    
    def add_video_to_vod(self, request: operations.AddVideoToVodRequest) -> operations.AddVideoToVodResponse:
        r"""Add a video to an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/videos/{video_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoToVodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandVideo])
                res.on_demand_video = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_video_from_vod(self, request: operations.DeleteVideoFromVodRequest) -> operations.DeleteVideoFromVodResponse:
        r"""Remove a video from an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoFromVodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_vod_video(self, request: operations.GetVodVideoRequest) -> operations.GetVodVideoResponse:
        r"""Get a specific video on an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/videos/{video_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out

        return res

    
    def get_vod_videos(self, request: operations.GetVodVideosRequest) -> operations.GetVodVideosResponse:
        r"""Get all the videos on an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out

        return res

    