import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class GroupsEssentials:
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

    
    def create_group(self, request: operations.CreateGroupRequest) -> operations.CreateGroupResponse:
        r"""Create a group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.group+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Group])
                res.group = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.group+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.group+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_group(self, request: operations.DeleteGroupRequest) -> operations.DeleteGroupResponse:
        r"""Delete a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{group_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_group(self, request: operations.GetGroupRequest) -> operations.GetGroupResponse:
        r"""Get a specific group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{group_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.group+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Group])
                res.group = out

        return res

    
    def get_groups(self, request: operations.GetGroupsRequest) -> operations.GetGroupsResponse:
        r"""Get all groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.group+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Group]])
                res.groups = out

        return res

    