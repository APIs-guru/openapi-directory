import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class GroupsSubscription:
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

    
    def join_group(self, request: operations.JoinGroupRequest) -> operations.JoinGroupResponse:
        r"""Add a user to a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/groups/{group_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JoinGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def join_group_alt1(self, request: operations.JoinGroupAlt1Request) -> operations.JoinGroupAlt1Response:
        r"""Add a user to a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/groups/{group_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JoinGroupAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def leave_group(self, request: operations.LeaveGroupRequest) -> operations.LeaveGroupResponse:
        r"""Remove a user from a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/groups/{group_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LeaveGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def leave_group_alt1(self, request: operations.LeaveGroupAlt1Request) -> operations.LeaveGroupAlt1Response:
        r"""Remove a user from a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/groups/{group_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LeaveGroupAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    