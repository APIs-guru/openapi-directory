import requests
from typing import Optional
from sdk.models import operations
from . import utils

class NearMisses:
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

    
    def get_admin_requests_unmatched_near_misses(self) -> operations.GetAdminRequestsUnmatchedNearMissesResponse:
        r"""Retrieve near-misses for all unmatched requests
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/requests/unmatched/near-misses"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminRequestsUnmatchedNearMissesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAdminRequestsUnmatchedNearMisses200ApplicationJSON])
                res.get_admin_requests_unmatched_near_misses_200_application_json_object = out

        return res

    
    def post_admin_near_misses_request(self, request: operations.PostAdminNearMissesRequestRequest) -> operations.PostAdminNearMissesRequestResponse:
        r"""Find near misses matching specific request
        Find at most 3 near misses for closest stub mappings to the specified request
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/near-misses/request"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminNearMissesRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAdminNearMissesRequest200ApplicationJSON])
                res.post_admin_near_misses_request_200_application_json_object = out

        return res

    
    def post_admin_near_misses_request_pattern(self, request: operations.PostAdminNearMissesRequestPatternRequest) -> operations.PostAdminNearMissesRequestPatternResponse:
        r"""Find near misses matching request pattern
        Find at most 3 near misses for closest logged requests to the specified request pattern
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/near-misses/request-pattern"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminNearMissesRequestPatternResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAdminNearMissesRequestPattern200ApplicationJSON])
                res.post_admin_near_misses_request_pattern_200_application_json_object = out

        return res

    