import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Groups:
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

    
    def create_group_category(self, request: operations.CreateGroupCategoryRequest) -> operations.CreateGroupCategoryResponse:
        r"""Create a group category
        Create a new group category
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/categories"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupCategory200ApplicationJSON])
                res.create_group_category_200_application_json_object = out

        return res

    
    def delete_group_category(self, request: operations.DeleteGroupCategoryRequest) -> operations.DeleteGroupCategoryResponse:
        r"""Delete group category
        Delete a group category. It must have no child groups and no children categories.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/categories/{groupCategoryId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGroupCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupCategory200ApplicationJSON])
                res.delete_group_category_200_application_json_object = out

        return res

    
    def get_group_category_details(self, request: operations.GetGroupCategoryDetailsRequest) -> operations.GetGroupCategoryDetailsResponse:
        r"""Get group category details
        Get detailed information about a group category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/categories/{groupCategoryId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupCategoryDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGroupCategoryDetails200ApplicationJSON])
                res.get_group_category_details_200_application_json_object = out

        return res

    
    def get_group_tree(self) -> operations.GetGroupTreeResponse:
        r"""Get groups tree
        Get all available groups and their categories in a tree
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/tree"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupTreeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGroupTree200ApplicationJSON])
                res.get_group_tree_200_application_json_object = out

        return res

    
    def update_group_category(self, request: operations.UpdateGroupCategoryRequest) -> operations.UpdateGroupCategoryResponse:
        r"""Update group category details
        Update detailed information about a group category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/categories/{groupCategoryId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateGroupCategory200ApplicationJSON])
                res.update_group_category_200_application_json_object = out

        return res

    
    def create_group(self, request: operations.CreateGroupRequest) -> operations.CreateGroupResponse:
        r"""Create a group
        Create a new group based in provided parameters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroup200ApplicationJSON])
                res.create_group_200_application_json_object = out

        return res

    
    def delete_group(self, request: operations.DeleteGroupRequest) -> operations.DeleteGroupResponse:
        r"""Delete a group
        Update detailed information about a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroup200ApplicationJSON])
                res.delete_group_200_application_json_object = out

        return res

    
    def group_details(self, request: operations.GroupDetailsRequest) -> operations.GroupDetailsResponse:
        r"""Get group details
        Get detailed information about a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GroupDetails200ApplicationJSON])
                res.group_details_200_application_json_object = out

        return res

    
    def list_groups(self) -> operations.ListGroupsResponse:
        r"""List all groups
        List all groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListGroups200ApplicationJSON])
                res.list_groups_200_application_json_object = out

        return res

    
    def reload_group(self, request: operations.ReloadGroupRequest) -> operations.ReloadGroupResponse:
        r"""Reload a group
        Recompute the content of a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}/reload", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadGroup200ApplicationJSON])
                res.reload_group_200_application_json_object = out

        return res

    
    def update_group(self, request: operations.UpdateGroupRequest) -> operations.UpdateGroupResponse:
        r"""Update group details
        Update detailed information about a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{groupId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateGroup200ApplicationJSON])
                res.update_group_200_application_json_object = out

        return res

    