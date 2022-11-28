import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class AlbumsEssentials:
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

    
    def create_album(self, request: operations.CreateAlbumRequest) -> operations.CreateAlbumResponse:
        r"""Create an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAlbumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Album])
                res.album = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def create_album_alt1(self, request: operations.CreateAlbumAlt1Request) -> operations.CreateAlbumAlt1Response:
        r"""Create an album
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/albums"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAlbumAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Album])
                res.album = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_album(self, request: operations.DeleteAlbumRequest) -> operations.DeleteAlbumResponse:
        r"""Delete an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAlbumResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_album_alt1(self, request: operations.DeleteAlbumAlt1Request) -> operations.DeleteAlbumAlt1Response:
        r"""Delete an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/albums/{album_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAlbumAlt1Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def edit_album(self, request: operations.EditAlbumRequest) -> operations.EditAlbumResponse:
        r"""Edit an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditAlbumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Album])
                res.album = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def edit_album_alt1(self, request: operations.EditAlbumAlt1Request) -> operations.EditAlbumAlt1Response:
        r"""Edit an album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/albums/{album_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditAlbumAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Album])
                res.album = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_album(self, request: operations.GetAlbumRequest) -> operations.GetAlbumResponse:
        r"""Get a specific album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums/{album_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Album])
                res.album = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_album_alt1(self, request: operations.GetAlbumAlt1Request) -> operations.GetAlbumAlt1Response:
        r"""Get a specific album
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/albums/{album_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Album])
                res.album = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.album+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_albums(self, request: operations.GetAlbumsRequest) -> operations.GetAlbumsResponse:
        r"""Get all the albums that belong to a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/albums", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Album]])
                res.albums = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_albums_alt1(self, request: operations.GetAlbumsAlt1Request) -> operations.GetAlbumsAlt1Response:
        r"""Get all the albums that belong to a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/albums"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumsAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Album]])
                res.albums = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    