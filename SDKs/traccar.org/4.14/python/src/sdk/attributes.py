import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Attributes:
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

    
    def delete_attributes_computed_id_(self, request: operations.DeleteAttributesComputedIDRequest) -> operations.DeleteAttributesComputedIDResponse:
        r"""Delete an Attribute
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attributes/computed/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAttributesComputedIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_attributes_computed(self, request: operations.GetAttributesComputedRequest) -> operations.GetAttributesComputedResponse:
        r"""Fetch a list of Attributes
        Without params, it returns a list of Attributes the user has access to
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/attributes/computed"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttributesComputedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Attribute]])
                res.attributes = out

        return res

    
    def post_attributes_computed(self, request: operations.PostAttributesComputedRequest) -> operations.PostAttributesComputedResponse:
        r"""Create an Attribute
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/attributes/computed"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAttributesComputedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Attribute])
                res.attribute = out

        return res

    
    def put_attributes_computed_id_(self, request: operations.PutAttributesComputedIDRequest) -> operations.PutAttributesComputedIDResponse:
        r"""Update an Attribute
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/attributes/computed/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAttributesComputedIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Attribute])
                res.attribute = out

        return res

    