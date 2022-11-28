import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class AlbumsAlbumVideos:
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

    
    def add_video_to_album(self, request: operations.AddVideoToAlbumRequest) -> operations.AddVideoToAlbumResponse:
        r"""Add a specific video to an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoToAlbumResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def add_video_to_album_alt1(self, request: operations.AddVideoToAlbumAlt1Request) -> operations.AddVideoToAlbumAlt1Response:
        r"""Add a specific video to an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/albums/{album_id}/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoToAlbumAlt1Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_album_video(self, request: operations.GetAlbumVideoRequest) -> operations.GetAlbumVideoResponse:
        r"""Get a specific video in an album
        This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/videos/{video_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_album_video_alt1(self, request: operations.GetAlbumVideoAlt1Request) -> operations.GetAlbumVideoAlt1Response:
        r"""Get a specific video in an album
        This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/albums/{album_id}/videos/{video_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumVideoAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_album_videos(self, request: operations.GetAlbumVideosRequest) -> operations.GetAlbumVideosResponse:
        r"""Get all the videos in an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_album_videos_alt1(self, request: operations.GetAlbumVideosAlt1Request) -> operations.GetAlbumVideosAlt1Response:
        r"""Get all the videos in an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/albums/{album_id}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumVideosAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def remove_video_from_album(self, request: operations.RemoveVideoFromAlbumRequest) -> operations.RemoveVideoFromAlbumResponse:
        r"""Remove a video from an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveVideoFromAlbumResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def remove_video_from_album_alt1(self, request: operations.RemoveVideoFromAlbumAlt1Request) -> operations.RemoveVideoFromAlbumAlt1Response:
        r"""Remove a video from an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/albums/{album_id}/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveVideoFromAlbumAlt1Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def replace_videos_in_album(self, request: operations.ReplaceVideosInAlbumRequest) -> operations.ReplaceVideosInAlbumResponse:
        r"""Replace all the videos in an album
        This method replaces all the existing videos in an album with one or more videos.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/videos", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplaceVideosInAlbumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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

    
    def replace_videos_in_album_alt1(self, request: operations.ReplaceVideosInAlbumAlt1Request) -> operations.ReplaceVideosInAlbumAlt1Response:
        r"""Replace all the videos in an album
        This method replaces all the existing videos in an album with one or more videos.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/albums/{album_id}/videos", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplaceVideosInAlbumAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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

    
    def set_video_as_album_thumbnail(self, request: operations.SetVideoAsAlbumThumbnailRequest) -> operations.SetVideoAsAlbumThumbnailResponse:
        r"""Set a video as the album thumbnail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetVideoAsAlbumThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Album])
                res.album = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def set_video_as_album_thumbnail_alt1(self, request: operations.SetVideoAsAlbumThumbnailAlt1Request) -> operations.SetVideoAsAlbumThumbnailAlt1Response:
        r"""Set a video as the album thumbnail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/albums/{album_id}/videos/{video_id}/set_album_thumbnail", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetVideoAsAlbumThumbnailAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Album])
                res.album = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    