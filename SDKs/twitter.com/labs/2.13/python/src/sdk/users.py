import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def find_user_by_id(self, request: operations.FindUserByIDRequest) -> operations.FindUserByIDResponse:
        r"""Return details for the specified users
        This endpoint returns information about a user. Specify user by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/labs/2/users/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FindUserByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SingleUserLookupResponse])
                res.single_user_lookup_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem = out

        return res

    
    def find_user_by_username(self, request: operations.FindUserByUsernameRequest) -> operations.FindUserByUsernameResponse:
        r"""Return details for the specified users
        This endpoint returns information about a user. Specify user by username.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/labs/2/users/by/username/{username}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FindUserByUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SingleUserLookupResponse])
                res.single_user_lookup_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem = out

        return res

    
    def find_users_by_id(self, request: operations.FindUsersByIDRequest) -> operations.FindUsersByIDResponse:
        r"""Return details for the specified users
        This endpoint returns information about users. Specify users by their ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/labs/2/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FindUsersByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserLookupResponse])
                res.user_lookup_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem = out

        return res

    
    def find_users_by_username(self, request: operations.FindUsersByUsernameRequest) -> operations.FindUsersByUsernameResponse:
        r"""Return details for the specified users
        This endpoint returns information about users. Specify users by their username.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/labs/2/users/by"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FindUsersByUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserLookupResponse])
                res.user_lookup_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem = out

        return res

    