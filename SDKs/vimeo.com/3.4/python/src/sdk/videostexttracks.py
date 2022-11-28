import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class VideosTextTracks:
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

    
    def create_text_track(self, request: operations.CreateTextTrackRequest) -> operations.CreateTextTrackResponse:
        r"""Add a text track to a video
        For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/texttracks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTextTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TextTrack])
                res.text_track = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def create_text_track_alt1(self, request: operations.CreateTextTrackAlt1Request) -> operations.CreateTextTrackAlt1Response:
        r"""Add a text track to a video
        For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/videos/{video_id}/texttracks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTextTrackAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TextTrack])
                res.text_track = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_text_track(self, request: operations.DeleteTextTrackRequest) -> operations.DeleteTextTrackResponse:
        r"""Delete a text track
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/texttracks/{texttrack_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTextTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def edit_text_track(self, request: operations.EditTextTrackRequest) -> operations.EditTextTrackResponse:
        r"""Edit a text track
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/texttracks/{texttrack_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditTextTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TextTrack])
                res.text_track = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_text_track(self, request: operations.GetTextTrackRequest) -> operations.GetTextTrackResponse:
        r"""Get a specific text track
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/texttracks/{texttrack_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTextTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TextTrack])
                res.text_track = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_text_tracks(self, request: operations.GetTextTracksRequest) -> operations.GetTextTracksResponse:
        r"""Get all the text tracks of a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/texttracks", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTextTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TextTrack]])
                res.text_tracks = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_text_tracks_alt1(self, request: operations.GetTextTracksAlt1Request) -> operations.GetTextTracksAlt1Response:
        r"""Get all the text tracks of a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/videos/{video_id}/texttracks", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTextTracksAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TextTrack]])
                res.text_tracks = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video.texttrack+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    