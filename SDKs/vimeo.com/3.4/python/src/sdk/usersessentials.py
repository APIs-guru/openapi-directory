import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class UsersEssentials:
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

    
    def edit_user(self, request: operations.EditUserRequest) -> operations.EditUserResponse:
        r"""Edit a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def edit_user_alt1(self, request: operations.EditUserAlt1Request) -> operations.EditUserAlt1Response:
        r"""Edit a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditUserAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def get_user(self, request: operations.GetUserRequest) -> operations.GetUserResponse:
        r"""Get a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def get_user_alt1(self) -> operations.GetUserAlt1Response:
        r"""Get a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    