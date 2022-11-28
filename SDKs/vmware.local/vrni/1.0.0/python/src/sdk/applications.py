import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Applications:
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

    
    def add_application(self, request: operations.AddApplicationRequest) -> operations.AddApplicationResponse:
        r"""Create an application
        Application is a group of tiers. A tier is a group of virtual machines based on membership criteria. Tiers are bound to single
        application. An application name is unique and should not conflict with another application name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/applications"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Application])
                res.application = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_tier(self, request: operations.AddTierRequest) -> operations.AddTierResponse:
        r"""Create tier in application
        Create a tier of an application by with specified membership criteria. The membership criteria id defined in terms of
        virtual machines or ip addresses/subnet. Please refer to API Guide on how to construct membership criteria.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/applications/{id}/tiers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tier])
                res.tier = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_application(self, request: operations.DeleteApplicationRequest) -> operations.DeleteApplicationResponse:
        r"""Delete an application
        Deleting an application deletes all the tiers of the application along with the application
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/applications/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_tier(self, request: operations.DeleteTierRequest) -> operations.DeleteTierResponse:
        r"""Delete tier
        Delete tier of an application
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/applications/{id}/tiers/{tier-id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_application(self, request: operations.GetApplicationRequest) -> operations.GetApplicationResponse:
        r"""Show application details
        Show application details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/applications/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Application])
                res.application = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_application_tier(self, request: operations.GetApplicationTierRequest) -> operations.GetApplicationTierResponse:
        r"""Show tier details
        Show tier details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/applications/{id}/tiers/{tier-id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetApplicationTierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tier])
                res.tier = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_tier(self, request: operations.GetTierRequest) -> operations.GetTierResponse:
        r"""Show tier details
        Show tier details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/tiers/{tier-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tier])
                res.tier = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_application_tiers(self, request: operations.ListApplicationTiersRequest) -> operations.ListApplicationTiersResponse:
        r"""List tiers of an application
        List tiers of an application
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/applications/{id}/tiers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListApplicationTiersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TierListResponse])
                res.tier_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_applications(self, request: operations.ListApplicationsRequest) -> operations.ListApplicationsResponse:
        r"""List applications
        List applications
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/applications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListApplicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PagedListResponse])
                res.paged_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    