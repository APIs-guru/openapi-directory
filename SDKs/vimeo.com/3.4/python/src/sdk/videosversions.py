import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VideosVersions:
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

    
    def create_video_version(self, request: operations.CreateVideoVersionRequest) -> operations.CreateVideoVersionResponse:
        r"""Add a version to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVideoVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.version+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoVersions])
                res.video_versions = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.version+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.version+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.version+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    