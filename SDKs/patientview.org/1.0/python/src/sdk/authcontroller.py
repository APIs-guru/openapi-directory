import requests
from sdk.models import operations
from . import utils

class AuthController:
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

    
    def get_basic_user_information(self, request: operations.GetBasicUserInformationRequest) -> operations.GetBasicUserInformationResponse:
        r"""Get Basic User Information
        Once logged in and have a token, get basic user information including group role membership
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/auth/{token}/basicuserinformation", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBasicUserInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def log_in(self, request: operations.LogInRequest) -> operations.LogInResponse:
        r"""Log In
        Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/login"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LogInResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def log_out(self, request: operations.LogOutRequest) -> operations.LogOutResponse:
        r"""Log Out
        Log Out
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/auth/logout/{token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LogOutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    