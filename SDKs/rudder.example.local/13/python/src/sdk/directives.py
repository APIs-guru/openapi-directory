import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Directives:
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

    
    def check_directive(self, request: operations.CheckDirectiveRequest) -> operations.CheckDirectiveResponse:
        r"""Check that update on a directive is valid
        Check that update on a directive is valid
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directives/{directiveId}/check", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckDirectiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckDirective200ApplicationJSON])
                res.check_directive_200_application_json_object = out

        return res

    
    def create_directive(self, request: operations.CreateDirectiveRequest) -> operations.CreateDirectiveResponse:
        r"""Create a directive
        Create a new directive from provided parameters. You can specify a source directive to clone it.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/directives"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDirectiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDirective200ApplicationJSON])
                res.create_directive_200_application_json_object = out

        return res

    
    def delete_directive(self, request: operations.DeleteDirectiveRequest) -> operations.DeleteDirectiveResponse:
        r"""Delete a directive
        Delete a directive
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directives/{directiveId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDirectiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDirective200ApplicationJSON])
                res.delete_directive_200_application_json_object = out

        return res

    
    def directive_details(self, request: operations.DirectiveDetailsRequest) -> operations.DirectiveDetailsResponse:
        r"""Get directive details
        Get all information about a given directive
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directives/{directiveId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectiveDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DirectiveDetails200ApplicationJSON])
                res.directive_details_200_application_json_object = out

        return res

    
    def list_directives(self) -> operations.ListDirectivesResponse:
        r"""List all directives
        List all directives
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/directives"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDirectivesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDirectives200ApplicationJSON])
                res.list_directives_200_application_json_object = out

        return res

    
    def update_directive(self, request: operations.UpdateDirectiveRequest) -> operations.UpdateDirectiveResponse:
        r"""Update a directive details
        Update directive information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directives/{directiveId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDirectiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateDirective200ApplicationJSON])
                res.update_directive_200_application_json_object = out

        return res

    