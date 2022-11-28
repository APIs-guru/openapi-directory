import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Microsegmentation:
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

    
    def export_nsx_recommended_rules(self, request: operations.ExportNsxRecommendedRulesRequest) -> operations.ExportNsxRecommendedRulesResponse:
        r"""Export recommended rules for NSX-V
        Export recommended firewall rules based on the flow data gathered by vRealize Network Insight in NSX-V compatible
        format
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/micro-seg/recommended-rules/nsx"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportNsxRecommendedRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.export_nsx_recommended_rules_200_application_octet_stream_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_recommended_rules(self, request: operations.ListRecommendedRulesRequest) -> operations.ListRecommendedRulesResponse:
        r"""Get logical recommended rules
        Get recommended firewall rules based on the flow data gathered by vRealize Network Insight.
        This API provides service to retrieve recommended rules based on flow traffic that is observed between
        two groups OR for a single group based on all the inbound and outboud traffic for that group.
        In case two groups are provided, both the groups should be of same type.
        Currently supported groups are Application, Tier, NSXSecurityGroup, EC2SecurityGroup.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/micro-seg/recommended-rules"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRecommendedRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RecommendedRules])
                res.recommended_rules = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    