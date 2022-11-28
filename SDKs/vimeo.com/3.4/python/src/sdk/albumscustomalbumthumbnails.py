import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class AlbumsCustomAlbumThumbnails:
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

    
    def create_album_custom_thumb(self, request: operations.CreateAlbumCustomThumbRequest) -> operations.CreateAlbumCustomThumbResponse:
        r"""Add a custom uploaded thumbnail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/custom_thumbnails", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAlbumCustomThumbResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_album_custom_thumbnail(self, request: operations.DeleteAlbumCustomThumbnailRequest) -> operations.DeleteAlbumCustomThumbnailResponse:
        r"""Remove a custom uploaded album thumbnail
        This method removes a custom uploaded thumbnail from the specified album.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAlbumCustomThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_album_custom_thumbnail(self, request: operations.GetAlbumCustomThumbnailRequest) -> operations.GetAlbumCustomThumbnailResponse:
        r"""Get a specific custom uploaded album thumbnail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumCustomThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
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

    
    def get_album_custom_thumbs(self, request: operations.GetAlbumCustomThumbsRequest) -> operations.GetAlbumCustomThumbsResponse:
        r"""Get all the custom upload thumbnails of an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/custom_thumbnails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumCustomThumbsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Picture]])
                res.pictures = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def replace_album_custom_thumb(self, request: operations.ReplaceAlbumCustomThumbRequest) -> operations.ReplaceAlbumCustomThumbResponse:
        r"""Replace a custom uploaded album thumbnail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplaceAlbumCustomThumbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
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

    