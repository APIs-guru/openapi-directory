import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils

class Webhooks:
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

    
    def delete_webhooks(self, request: operations.DeleteWebhooksRequest) -> operations.DeleteWebhooksResponse:
        r"""Remove a webhook by id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/integrations/webhooks/:id"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_webhooks(self, request: operations.GetWebhooksRequest) -> operations.GetWebhooksResponse:
        r"""Get a list of existent webhooks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/integrations/webhooks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.webhooks = out

        return res

    