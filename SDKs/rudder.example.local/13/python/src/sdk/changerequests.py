import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ChangeRequests:
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

    
    def accept_change_request(self, request: operations.AcceptChangeRequestRequest) -> operations.AcceptChangeRequestResponse:
        r"""Accept a request details
        Accept a change request
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/changeRequests/{changeRequestId}/accept", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AcceptChangeRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AcceptChangeRequest200ApplicationJSON])
                res.accept_change_request_200_application_json_object = out

        return res

    
    def change_request_details(self, request: operations.ChangeRequestDetailsRequest) -> operations.ChangeRequestDetailsResponse:
        r"""Get a change request details
        Get a change request details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/changeRequests/{changeRequestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeRequestDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ChangeRequestDetails200ApplicationJSON])
                res.change_request_details_200_application_json_object = out

        return res

    
    def decline_change_request(self, request: operations.DeclineChangeRequestRequest) -> operations.DeclineChangeRequestResponse:
        r"""Decline a request details
        Refuse a change request
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/changeRequests/{changeRequestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeclineChangeRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeclineChangeRequest200ApplicationJSON])
                res.decline_change_request_200_application_json_object = out

        return res

    
    def list_change_requests(self) -> operations.ListChangeRequestsResponse:
        r"""List all change requests
        List all change requests
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/changeRequests"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListChangeRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListChangeRequests200ApplicationJSON])
                res.list_change_requests_200_application_json_object = out

        return res

    
    def list_users(self) -> operations.ListUsersResponse:
        r"""List user
        List all validated and unvalidated users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsers200ApplicationJSON])
                res.list_users_200_application_json_object = out

        return res

    
    def remove_validated_user(self, request: operations.RemoveValidatedUserRequest) -> operations.RemoveValidatedUserResponse:
        r"""Remove an user from validated user list
        The user is again subject to workflow validation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/validatedUsers/{username}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveValidatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RemoveValidatedUser200ApplicationJSON])
                res.remove_validated_user_200_application_json_object = out

        return res

    
    def save_workflow_user(self, request: operations.SaveWorkflowUserRequest) -> operations.SaveWorkflowUserResponse:
        r"""Update validated user list
        Add and remove user from validated users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/validatedUsers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveWorkflowUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveWorkflowUser200ApplicationJSON])
                res.save_workflow_user_200_application_json_object = out

        return res

    
    def update_change_request(self, request: operations.UpdateChangeRequestRequest) -> operations.UpdateChangeRequestResponse:
        r"""Update a request details
        Update a change request
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/changeRequests/{changeRequestId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateChangeRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateChangeRequest200ApplicationJSON])
                res.update_change_request_200_application_json_object = out

        return res

    