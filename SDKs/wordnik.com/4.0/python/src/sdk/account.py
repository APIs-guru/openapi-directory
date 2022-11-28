import requests
from sdk.models import operations
from . import utils

class Account:
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

    
    def authenticate(self, request: operations.AuthenticateRequest) -> operations.AuthenticateResponse:
        r"""Authenticates a User
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account.json/authenticate/{username}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authenticate_post(self, request: operations.AuthenticatePostRequest) -> operations.AuthenticatePostResponse:
        r"""Authenticates a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account.json/authenticate/{username}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticatePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_api_token_status(self, request: operations.GetAPITokenStatusRequest) -> operations.GetAPITokenStatusResponse:
        r"""Returns usage statistics for the API account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account.json/apiTokenStatus"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPITokenStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_logged_in_user(self, request: operations.GetLoggedInUserRequest) -> operations.GetLoggedInUserResponse:
        r"""Returns the logged-in User
        Requires a valid auth_token to be set.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account.json/user"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoggedInUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_word_lists_for_logged_in_user(self, request: operations.GetWordListsForLoggedInUserRequest) -> operations.GetWordListsForLoggedInUserResponse:
        r"""Fetches WordList objects for the logged-in user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account.json/wordLists"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWordListsForLoggedInUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    