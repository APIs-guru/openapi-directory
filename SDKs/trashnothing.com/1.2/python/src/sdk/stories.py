import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Stories:
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

    
    def get_stories(self, request: operations.GetStoriesRequest) -> operations.GetStoriesResponse:
        r"""List stories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStories200ApplicationJSON])
                res.get_stories_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_story(self, request: operations.GetStoryRequest) -> operations.GetStoryResponse:
        r"""Retrieve a story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stories/{story_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def like_story(self, request: operations.LikeStoryRequest) -> operations.LikeStoryResponse:
        r"""Like a story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stories/{story_id}/like", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LikeStoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 404:
            pass

        return res

    
    def submit_story(self, request: operations.SubmitStoryRequest) -> operations.SubmitStoryResponse:
        r"""Submit a story
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stories"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitStoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 400:
            pass

        return res

    
    def unlike_story(self, request: operations.UnlikeStoryRequest) -> operations.UnlikeStoryResponse:
        r"""Unlike a story
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stories/{story_id}/unlike", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UnlikeStoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Story])
                res.story = out
        elif r.status_code == 404:
            pass

        return res

    
    def viewed_story(self, request: operations.ViewedStoryRequest) -> operations.ViewedStoryResponse:
        r"""Record story viewed
        Records every time a user views the full story (and not just a preview or snippet),
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stories/{story_id}/viewed", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ViewedStoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    