import requests
from typing import Optional
from sdk.models import operations
from . import utils

class UserManagement:
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

    
    def add_user(self, request: operations.AddUserRequest) -> operations.AddUserResponse:
        r"""Add user
        Add a new user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/usermanagement"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddUser200ApplicationJSON])
                res.add_user_200_application_json_object = out

        return res

    
    def delete_user(self, request: operations.DeleteUserRequest) -> operations.DeleteUserResponse:
        r"""Delete an user
        Delete the user and his permissions
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/usermanagement/{username}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteUser200ApplicationJSON])
                res.delete_user_200_application_json_object = out

        return res

    
    def get_role(self) -> operations.GetRoleResponse:
        r"""List all roles
        Get all available roles and their rights
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/usermanagement/roles"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRole200ApplicationJSON])
                res.get_role_200_application_json_object = out

        return res

    
    def get_user_info(self) -> operations.GetUserInfoResponse:
        r"""List all users
        Get the list of all present users and their permissions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/usermanagement/users"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserInfo200ApplicationJSON])
                res.get_user_info_200_application_json_object = out

        return res

    
    def reload_user_conf(self) -> operations.ReloadUserConfResponse:
        r"""Reload user
        Reload the users from the file system, in the configuration file
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/usermanagement/users/reload"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadUserConfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadUserConf200ApplicationJSON])
                res.reload_user_conf_200_application_json_object = out

        return res

    
    def update_user(self, request: operations.UpdateUserRequest) -> operations.UpdateUserResponse:
        r"""Update user's infos
        Rename, change password (pre-hashed or not) and change permission of an user. If a parameter is empty, it will be ignored.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/usermanagement/update/{username}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateUser200ApplicationJSON])
                res.update_user_200_application_json_object = out

        return res

    