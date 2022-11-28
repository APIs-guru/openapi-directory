import requests
from typing import Any,Optional
from sdk.models import shared, operations
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

    
    def add_or_delete_rules(self, request: operations.AddOrDeleteRulesRequest) -> operations.AddOrDeleteRulesResponse:
        r"""Add or delete rules from a user's active rule set.
        Add or delete rules from a user's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/labs/1/tweets/stream/filter/rules"
        
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

        res = operations.AddOrDeleteRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.add_or_delete_rules_200_application_json_one_of = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem = out

        return res

    
    def get_rules(self, request: operations.GetRulesRequest) -> operations.GetRulesResponse:
        r"""Returns rules from a user's active rule set.
        Returns rules from a user's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/labs/1/tweets/stream/filter/rules"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRulesResponse])
                res.get_rules_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem = out

        return res

    