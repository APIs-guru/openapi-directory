import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Requests:
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

    
    def delete_admin_requests(self) -> operations.DeleteAdminRequestsResponse:
        r"""Delete all requests in journal
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/requests"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdminRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_admin_requests_request_id_(self, request: operations.DeleteAdminRequestsRequestIDRequest) -> operations.DeleteAdminRequestsRequestIDResponse:
        r"""Delete request by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/__admin/requests/{requestId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdminRequestsRequestIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_admin_requests(self, request: operations.GetAdminRequestsRequest) -> operations.GetAdminRequestsResponse:
        r"""Get all requests in journal
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/requests"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_admin_requests_request_id_(self, request: operations.GetAdminRequestsRequestIDRequest) -> operations.GetAdminRequestsRequestIDResponse:
        r"""Get request by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/__admin/requests/{requestId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminRequestsRequestIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_admin_requests_unmatched(self) -> operations.GetAdminRequestsUnmatchedResponse:
        r"""Find unmatched requests
        Get details of logged requests that weren't matched by any stub mapping
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/requests/unmatched"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminRequestsUnmatchedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_admin_requests_count(self, request: operations.PostAdminRequestsCountRequest) -> operations.PostAdminRequestsCountResponse:
        r"""Count requests by criteria
        Count requests logged in the journal matching the specified criteria
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/requests/count"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminRequestsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAdminRequestsCount200ApplicationJSON])
                res.post_admin_requests_count_200_application_json_object = out

        return res

    
    def post_admin_requests_find(self, request: operations.PostAdminRequestsFindRequest) -> operations.PostAdminRequestsFindResponse:
        r"""Find requests by criteria
        Retrieve details of requests logged in the journal matching the specified criteria
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/requests/find"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminRequestsFindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_admin_requests_remove(self, request: operations.PostAdminRequestsRemoveRequest) -> operations.PostAdminRequestsRemoveResponse:
        r"""Remove requests by criteria
        Removed requests logged in the journal matching the specified criteria
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/requests/remove"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminRequestsRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_admin_requests_remove_by_metadata(self, request: operations.PostAdminRequestsRemoveByMetadataRequest) -> operations.PostAdminRequestsRemoveByMetadataResponse:
        r"""Delete requests mappings matching metadata
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/requests/remove-by-metadata"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminRequestsRemoveByMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_admin_requests_reset(self) -> operations.PostAdminRequestsResetResponse:
        r"""Empty the request journal
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/requests/reset"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminRequestsResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    