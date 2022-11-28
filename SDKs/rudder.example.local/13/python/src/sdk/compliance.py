import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Compliance:
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

    
    def get_global_compliance(self) -> operations.GetGlobalComplianceResponse:
        r"""Global compliance
        Get current global compliance of a Rudder server
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/compliance"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGlobalComplianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGlobalCompliance200ApplicationJSON])
                res.get_global_compliance_200_application_json_object = out

        return res

    
    def get_node_compliance(self, request: operations.GetNodeComplianceRequest) -> operations.GetNodeComplianceResponse:
        r"""Compliance details by node
        Get current compliance of a node of a Rudder server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/compliance/nodes/{nodeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeComplianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeCompliance200ApplicationJSON])
                res.get_node_compliance_200_application_json_object = out

        return res

    
    def get_nodes_compliance(self, request: operations.GetNodesComplianceRequest) -> operations.GetNodesComplianceResponse:
        r"""Compliance details for all nodes
        Get current compliance of all the nodes of a Rudder server
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/compliance/nodes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodesComplianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodesCompliance200ApplicationJSON])
                res.get_nodes_compliance_200_application_json_object = out

        return res

    
    def get_rule_compliance(self, request: operations.GetRuleComplianceRequest) -> operations.GetRuleComplianceResponse:
        r"""Compliance details by rule
        Get current compliance of a rule of a Rudder server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/compliance/rules/{ruleId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRuleComplianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRuleCompliance200ApplicationJSON])
                res.get_rule_compliance_200_application_json_object = out

        return res

    
    def get_rules_compliance(self, request: operations.GetRulesComplianceRequest) -> operations.GetRulesComplianceResponse:
        r"""Compliance details for all rules
        Get current compliance of all the rules of a Rudder server
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/compliance/rules"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesComplianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesCompliance200ApplicationJSON])
                res.get_rules_compliance_200_application_json_object = out

        return res

    