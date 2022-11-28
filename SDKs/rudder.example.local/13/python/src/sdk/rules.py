import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Rules:
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

    
    def create_rule_category(self, request: operations.CreateRuleCategoryRequest) -> operations.CreateRuleCategoryResponse:
        r"""Create a rule category
        Create a new rule category
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules/categories"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRuleCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateRuleCategory200ApplicationJSON])
                res.create_rule_category_200_application_json_object = out

        return res

    
    def delete_rule_category(self, request: operations.DeleteRuleCategoryRequest) -> operations.DeleteRuleCategoryResponse:
        r"""Delete group category
        Delete a group category. It must have no child groups and no children categories.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/categories/{ruleCategoryId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRuleCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRuleCategory200ApplicationJSON])
                res.delete_rule_category_200_application_json_object = out

        return res

    
    def get_rule_category_details(self, request: operations.GetRuleCategoryDetailsRequest) -> operations.GetRuleCategoryDetailsResponse:
        r"""Get rule category details
        Get detailed information about a rule category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/categories/{ruleCategoryId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRuleCategoryDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRuleCategoryDetails200ApplicationJSON])
                res.get_rule_category_details_200_application_json_object = out

        return res

    
    def get_rule_tree(self) -> operations.GetRuleTreeResponse:
        r"""Get rules tree
        Get all available rules and their categories in a tree
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules/tree"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRuleTreeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRuleTree200ApplicationJSON])
                res.get_rule_tree_200_application_json_object = out

        return res

    
    def update_rule_category(self, request: operations.UpdateRuleCategoryRequest) -> operations.UpdateRuleCategoryResponse:
        r"""Update rule category details
        Update detailed information about a rule category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/categories/{ruleCategoryId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRuleCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateRuleCategory200ApplicationJSON])
                res.update_rule_category_200_application_json_object = out

        return res

    
    def create_rule(self, request: operations.CreateRuleRequest) -> operations.CreateRuleResponse:
        r"""Create a rule
        Create a new rule. You can specify a source rule to clone it.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateRule200ApplicationJSON])
                res.create_rule_200_application_json_object = out

        return res

    
    def delete_rule(self, request: operations.DeleteRuleRequest) -> operations.DeleteRuleResponse:
        r"""Delete a rule
        Delete a rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{ruleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRule200ApplicationJSON])
                res.delete_rule_200_application_json_object = out

        return res

    
    def list_rules(self) -> operations.ListRulesResponse:
        r"""List all rules
        List all rules
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRules200ApplicationJSON])
                res.list_rules_200_application_json_object = out

        return res

    
    def rule_details(self, request: operations.RuleDetailsRequest) -> operations.RuleDetailsResponse:
        r"""Get a rule details
        Get the details of a rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{ruleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RuleDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RuleDetails200ApplicationJSON])
                res.rule_details_200_application_json_object = out

        return res

    
    def update_rule(self, request: operations.UpdateRuleRequest) -> operations.UpdateRuleResponse:
        r"""Update a rule details
        Update the details of a rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{ruleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateRule200ApplicationJSON])
                res.update_rule_200_application_json_object = out

        return res

    