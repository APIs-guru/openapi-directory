import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class GroupsUsers:
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

    
    def check_if_user_joined_group(self, request: operations.CheckIfUserJoinedGroupRequest) -> operations.CheckIfUserJoinedGroupResponse:
        r"""Check if a user has joined a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/groups/{group_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfUserJoinedGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def check_if_user_joined_group_alt1(self, request: operations.CheckIfUserJoinedGroupAlt1Request) -> operations.CheckIfUserJoinedGroupAlt1Response:
        r"""Check if a user has joined a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/groups/{group_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfUserJoinedGroupAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_group_members(self, request: operations.GetGroupMembersRequest) -> operations.GetGroupMembersResponse:
        r"""Get all the members of a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{group_id}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_user_groups(self, request: operations.GetUserGroupsRequest) -> operations.GetUserGroupsResponse:
        r"""Get all the groups that a user has joined
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.group+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Group]])
                res.groups = out

        return res

    
    def get_user_groups_alt1(self, request: operations.GetUserGroupsAlt1Request) -> operations.GetUserGroupsAlt1Response:
        r"""Get all the groups that a user has joined
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserGroupsAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.group+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Group]])
                res.groups = out

        return res

    