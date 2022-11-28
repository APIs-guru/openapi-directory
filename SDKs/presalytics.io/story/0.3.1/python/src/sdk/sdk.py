

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://presalytics.io/story",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def cache_nonce_get(self, request: operations.CacheNonceGetRequest) -> operations.CacheNonceGetResponse:
        r"""Cache: Get Subdocument
        An endpoint for broswer retreive html documents that were cached durin the rendering process via a nonce (token)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cache/{nonce}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CacheNonceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/html"):
                res.login_button = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def cache_post(self, request: operations.CachePostRequest) -> operations.CachePostResponse:
        r"""Cache: Store Subdocument
        An endpoint for Presalytics Renderers to cache html subdocuments for subsequent retrieval by the browser.  Documents Are retrieved via token expire after 1 minute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cache"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CachePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def collaborators_post(self, request: operations.CollaboratorsPostRequest) -> operations.CollaboratorsPostResponse:
        r"""Collborators: Bulk Update (Admin Only)
        Allows for bulk updates on collaborator metadata.  Restricted to internal admins
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collaborators"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollaboratorsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PermissionType]])
                res.permission_types = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def get_environment(self) -> operations.GetEnvironmentResponse:
        r"""Environment: Get
        pass rendering metadata to the client-side scripts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/environment/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_environment_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def session_id_delete(self, request: operations.SessionIDDeleteRequest) -> operations.SessionIDDeleteResponse:
        r"""Sessions: Delete by Id
        Remove a session and dependant data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sessions/{session_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionIDDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def session_id_get(self, request: operations.SessionIDGetRequest) -> operations.SessionIDGetResponse:
        r"""Sessions: Get
        Get session metadata
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sessions/{session_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Session])
                res.session = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def sessions_id_views_get(self, request: operations.SessionsIDViewsGetRequest) -> operations.SessionsIDViewsGetResponse:
        r"""Views: List Session Views
        Get data for all views in a session
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sessions/{session_id}/views", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionsIDViewsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.View]])
                res.views = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def sessions_id_views_post(self, request: operations.SessionsIDViewsPostRequest) -> operations.SessionsIDViewsPostResponse:
        r"""Views: Create A Session View
        Create a page view object for a viewing session
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sessions/{session_id}/views", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SessionsIDViewsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.View])
                res.view = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def spec_no_tags(self) -> operations.SpecNoTagsResponse:
        r"""Specification: No tags
        json-formatted version of this spec with the tags removed to help with codegen processes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/no_tags_spec"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SpecNoTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_get(self, request: operations.StoryGetRequest) -> operations.StoryGetResponse:
        r"""Story: Get List of User Stories
        Returns a list of stories for this user identifie via the access token presentated to the api
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Story]])
                res.stories = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_analytics(self, request: operations.StoryIDAnalyticsRequest) -> operations.StoryIDAnalyticsResponse:
        r"""Story: View Analytics
        returns an html document containing session and event metrics for the story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/analytics", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDAnalyticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.reveal_js_presenation_with_analytics_data = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/html"):
                res.login_button = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_collaborators_get(self, request: operations.StoryIDCollaboratorsGetRequest) -> operations.StoryIDCollaboratorsGetResponse:
        r"""Story Collaborators: List
        Gets a list users that can read or edit this story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/collaborators", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDCollaboratorsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.StoryCollaborator]])
                res.story_collaborators = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_collaborators_inactive_post(self, request: operations.StoryIDCollaboratorsInactivePostRequest) -> operations.StoryIDCollaboratorsInactivePostResponse:
        r"""Story Collaborators: Edit Inactive User Permission
        Edit story permissions for inactive users.  Requires admin rights.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/collaborators/inactive", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDCollaboratorsInactivePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoryCollaborator])
                res.story_collaborator = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_collaborators_post(self, request: operations.StoryIDCollaboratorsPostRequest) -> operations.StoryIDCollaboratorsPostResponse:
        r"""Story Collaborators: Add New User
        Add a colloborator to this story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/collaborators", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDCollaboratorsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoryCollaborator])
                res.story_collaborator = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_collaborators_userid_delete(self, request: operations.StoryIDCollaboratorsUseridDeleteRequest) -> operations.StoryIDCollaboratorsUseridDeleteResponse:
        r"""Story Collaborators: Remove User
        Remove a collaborator from this story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/collaborators/{story_collaborator_userid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDCollaboratorsUseridDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_collaborators_userid_get(self, request: operations.StoryIDCollaboratorsUseridGetRequest) -> operations.StoryIDCollaboratorsUseridGetResponse:
        r"""Story Collaborators: Access Permissions
        Data to help you understand the access rights of a particular collaborator on this story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/collaborators/{story_collaborator_userid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDCollaboratorsUseridGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoryCollaborator])
                res.story_collaborator = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_collaborators_userid_permissiontype_get(self, request: operations.StoryIDCollaboratorsUseridPermissiontypeGetRequest) -> operations.StoryIDCollaboratorsUseridPermissiontypeGetResponse:
        r"""Permissions: Story Authorization for a User
        Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/collaborators/authorize/{story_collaborator_userid}/{permissiontype}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDCollaboratorsUseridPermissiontypeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_collaborators_userid_put(self, request: operations.StoryIDCollaboratorsUseridPutRequest) -> operations.StoryIDCollaboratorsUseridPutResponse:
        r"""Story Collaborators: Edit Access Rights
        Modify a user's access right to this story (e.g., grant edit permissions)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/collaborators/{story_collaborator_userid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDCollaboratorsUseridPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoryCollaborator])
                res.story_collaborator = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_delete(self, request: operations.StoryIDDeleteRequest) -> operations.StoryIDDeleteResponse:
        r"""Story: Delete by Id
        Remove a story and dependant data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_events_get(self, request: operations.StoryIDEventsGetRequest) -> operations.StoryIDEventsGetResponse:
        r"""Events: List Events
        Get a list of Events available to users of this story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/events", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDEventsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_events_post(self, request: operations.StoryIDEventsPostRequest) -> operations.StoryIDEventsPostResponse:
        r"""Events: Manage Events
        Add a message to the Story's conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/events", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDEventsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.story_id_events_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_file_ooxmlautomationid_delete(self, request: operations.StoryIDFileOoxmlautomationidDeleteRequest) -> operations.StoryIDFileOoxmlautomationidDeleteResponse:
        r"""Story: Delete Subdocument
        Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/file/{ooxml_automation_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDFileOoxmlautomationidDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_file_ooxmlautomationid_get(self, request: operations.StoryIDFileOoxmlautomationidGetRequest) -> operations.StoryIDFileOoxmlautomationidGetResponse:
        r"""Story: Download Updated File
        Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/file/{ooxml_automation_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDFileOoxmlautomationidGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.presentationml.presentation"):
                res.powerpoint_presentation = r.content
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
                res.word_document = r.content
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.wordprocessingml.document"):
                res.excel_spreadsheet = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_file_post(self, request: operations.StoryIDFilePostRequest) -> operations.StoryIDFilePostResponse:
        r"""Story: Upload a File To Existing Story
        Upload a file to an existing story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/file", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDFilePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_get(self, request: operations.StoryIDGetRequest) -> operations.StoryIDGetResponse:
        r"""Story: Get by Id
        Returns story metadata, inlcuding json object with story outline
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_messages_get(self, request: operations.StoryIDMessagesGetRequest) -> operations.StoryIDMessagesGetResponse:
        r"""Conversation: List Conversation Messages
        Get a list of messages that have been send in this story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/messages", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDMessagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.messages = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_messages_post(self, request: operations.StoryIDMessagesPostRequest) -> operations.StoryIDMessagesPostResponse:
        r"""Conversation: Send a Message
        Add a message to the Story's conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/messages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDMessagesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_outline_get(self, request: operations.StoryIDOutlineGetRequest) -> operations.StoryIDOutlineGetResponse:
        r"""Story: Get Story Outline
        Returns Story's outline
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/outline", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDOutlineGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.story_id_outline_get_200_application_json_string = r.content
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.status = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 410:
            pass

        return res

    
    def story_id_outline_post(self, request: operations.StoryIDOutlinePostRequest) -> operations.StoryIDOutlinePostResponse:
        r"""Story: Post Story Outline
        Update a story outline.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/outline", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDOutlinePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_public(self, request: operations.StoryIDPublicRequest) -> operations.StoryIDPublicResponse:
        r"""Story: Public Link to Story Reveal.js Document
        returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/public/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDPublicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.reveal_js_presenation = r.content
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_put(self, request: operations.StoryIDPutRequest) -> operations.StoryIDPutResponse:
        r"""Story: Modify
        Update story metadata, including story outline
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_reveal(self, request: operations.StoryIDRevealRequest) -> operations.StoryIDRevealResponse:
        r"""Story: Get Story at Reveal.js Document
        returns an html document containing a reveal.js epresentation of the story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/reveal", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDRevealResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.reveal_js_presenation = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/html"):
                res.login_button = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_session_post(self, request: operations.StoryIDSessionPostRequest) -> operations.StoryIDSessionPostResponse:
        r"""Sessions: Create a Session
        Create a new session
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/sessions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDSessionPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Session])
                res.session = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_sessions_get(self, request: operations.StoryIDSessionsGetRequest) -> operations.StoryIDSessionsGetResponse:
        r"""Sessions: List Story Sessions
        Get a list of sessions asscoaited with this story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/sessions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDSessionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Session]])
                res.sessions = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_id_status_get(self, request: operations.StoryIDStatusGetRequest) -> operations.StoryIDStatusGetResponse:
        r"""Story: Get Story Status
        Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/status", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDStatusGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.status = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_outline_schema(self, request: operations.StoryOutlineSchemaRequest) -> operations.StoryOutlineSchemaResponse:
        r"""Story Outline Schema
        Json Schema for validating Story Outline objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/outline-schema/{schema_version}/story-outline.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryOutlineSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_permission_types_get(self) -> operations.StoryPermissionTypesGetResponse:
        r"""Permissions: List Permission Types
        Returns a list of possible user permission types
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/permission_types"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryPermissionTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PermissionType]])
                res.permission_types = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_post(self, request: operations.StoryPostRequest) -> operations.StoryPostResponse:
        r"""Story: Upload
        Upload new story to presalytics api
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_post_file(self, request: operations.StoryPostFileRequest) -> operations.StoryPostFileResponse:
        r"""Story: Upload a File
        Upload new story to presalytics api via an Open Office Xml file
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/file"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryPostFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_post_file_json(self, request: operations.StoryPostFileJSONRequest) -> operations.StoryPostFileJSONResponse:
        r"""Story: Upload a File (base64)
        Upload new story to presalytics api via an Open Office Xml file
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/file/json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryPostFileJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def views_id_delete(self, request: operations.ViewsIDDeleteRequest) -> operations.ViewsIDDeleteResponse:
        r"""Views: Delete by Id
        Remove a view and dependant data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/views/{view_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ViewsIDDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def views_id_get(self, request: operations.ViewsIDGetRequest) -> operations.ViewsIDGetResponse:
        r"""Views: Get View
        Get view meta data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/views/{view_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ViewsIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.View])
                res.view = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    