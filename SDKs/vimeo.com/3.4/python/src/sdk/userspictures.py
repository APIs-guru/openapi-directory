import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class UsersPictures:
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

    
    def create_picture(self, request: operations.CreatePictureRequest) -> operations.CreatePictureResponse:
        r"""Add a user picture
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/pictures", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePictureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out

        return res

    
    def create_picture_alt1(self, request: operations.CreatePictureAlt1Request) -> operations.CreatePictureAlt1Response:
        r"""Add a user picture
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/pictures"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePictureAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out

        return res

    
    def delete_picture(self, request: operations.DeletePictureRequest) -> operations.DeletePictureResponse:
        r"""Delete a user picture
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/pictures/{portraitset_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePictureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_picture_alt1(self, request: operations.DeletePictureAlt1Request) -> operations.DeletePictureAlt1Response:
        r"""Delete a user picture
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/pictures/{portraitset_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePictureAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def edit_picture(self, request: operations.EditPictureRequest) -> operations.EditPictureResponse:
        r"""Edit a user picture
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/pictures/{portraitset_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditPictureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out

        return res

    
    def edit_picture_alt1(self, request: operations.EditPictureAlt1Request) -> operations.EditPictureAlt1Response:
        r"""Edit a user picture
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/pictures/{portraitset_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditPictureAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out

        return res

    
    def get_picture(self, request: operations.GetPictureRequest) -> operations.GetPictureResponse:
        r"""Get a specific user picture
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/pictures/{portraitset_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPictureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out

        return res

    
    def get_picture_alt1(self, request: operations.GetPictureAlt1Request) -> operations.GetPictureAlt1Response:
        r"""Get a specific user picture
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/pictures/{portraitset_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPictureAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out

        return res

    
    def get_pictures(self, request: operations.GetPicturesRequest) -> operations.GetPicturesResponse:
        r"""Get all the pictures that belong to a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/pictures", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPicturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Picture]])
                res.pictures = out

        return res

    
    def get_pictures_alt1(self, request: operations.GetPicturesAlt1Request) -> operations.GetPicturesAlt1Response:
        r"""Get all the pictures that belong to a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/pictures"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPicturesAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Picture]])
                res.pictures = out

        return res

    