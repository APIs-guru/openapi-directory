import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
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

    
    def contact_moderators(self, request: operations.ContactModeratorsRequest) -> operations.ContactModeratorsResponse:
        r"""Contact group moderators
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{group_id}/contact", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactModeratorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_group(self, request: operations.GetGroupRequest) -> operations.GetGroupResponse:
        r"""Retrieve a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{group_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Group])
                res.group = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_groups_by_ids(self, request: operations.GetGroupsByIdsRequest) -> operations.GetGroupsByIdsResponse:
        r"""Retrieve multiple groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/multiple"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupsByIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Group]])
                res.groups = out
        elif r.status_code == 400:
            pass

        return res

    
    def join_groups(self, request: operations.JoinGroupsRequest) -> operations.JoinGroupsResponse:
        r"""Join groups
        Request membership to one or more groups. <br /><br /> NOTE: Any group with a has_questions field set to true will also require answers to the groups' new member questionnaire to be submitted.  Groups waiting for answers will have their membership field set to 'pending-questions'.  And the questionnaire that needs to be answered can be found in the membership.questionnaire field of the group after a subscribe request is made to that group.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/subscribe"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JoinGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.JoinGroups200ApplicationJSON])
                res.join_groups_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def leave_group(self, request: operations.LeaveGroupRequest) -> operations.LeaveGroupResponse:
        r"""Leave a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{group_id}/unsubscribe", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LeaveGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Group])
                res.group = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def search_groups(self, request: operations.SearchGroupsRequest) -> operations.SearchGroupsResponse:
        r"""Search groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchGroups200ApplicationJSON])
                res.search_groups_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def submit_answers(self, request: operations.SubmitAnswersRequest) -> operations.SubmitAnswersResponse:
        r"""Submit group answers
        Submits answers to a groups' membership questionnaire. <br /><br /> The request body should be a JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {\"Where do you live?\": \"New York City\"} ). All questions are required so no null or empty string answers are allowed.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{group_id}/answers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Group])
                res.group = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    