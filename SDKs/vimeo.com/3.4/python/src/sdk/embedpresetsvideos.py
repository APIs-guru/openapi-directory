import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class EmbedPresetsVideos:
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

    
    def add_video_embed_preset(self, request: operations.AddVideoEmbedPresetRequest) -> operations.AddVideoEmbedPresetResponse:
        r"""Add an embed preset to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/presets/{preset_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoEmbedPresetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def create_video_custom_logo(self, request: operations.CreateVideoCustomLogoRequest) -> operations.CreateVideoCustomLogoResponse:
        r"""Add a new custom logo to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/timelinethumbnails", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVideoCustomLogoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_video_embed_preset(self, request: operations.DeleteVideoEmbedPresetRequest) -> operations.DeleteVideoEmbedPresetResponse:
        r"""Remove an embed preset from a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/presets/{preset_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoEmbedPresetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_embed_preset_videos(self, request: operations.GetEmbedPresetVideosRequest) -> operations.GetEmbedPresetVideosResponse:
        r"""Get all the videos that have been added to an embed preset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/presets/{preset_id}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmbedPresetVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out

        return res

    
    def get_embed_preset_videos_alt1(self, request: operations.GetEmbedPresetVideosAlt1Request) -> operations.GetEmbedPresetVideosAlt1Response:
        r"""Get all the videos that have been added to an embed preset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/presets/{preset_id}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmbedPresetVideosAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out

        return res

    
    def get_video_custom_logo(self, request: operations.GetVideoCustomLogoRequest) -> operations.GetVideoCustomLogoResponse:
        r"""Get a custom video logo
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/timelinethumbnails/{thumbnail_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoCustomLogoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_video_embed_preset(self, request: operations.GetVideoEmbedPresetRequest) -> operations.GetVideoEmbedPresetResponse:
        r"""Check if an embed preset has been added to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/presets/{preset_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoEmbedPresetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    