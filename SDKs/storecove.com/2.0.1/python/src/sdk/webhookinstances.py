import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class WebhookInstances:
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

    
    def delete_webhook_instance(self, request: operations.DeleteWebhookInstanceRequest) -> operations.DeleteWebhookInstanceResponse:
        r"""DELETE a WebhookInstance
        DELETE a specific WebhookInstance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhook_instances/{guid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhookInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_webhook_instances(self) -> operations.GetWebhookInstancesResponse:
        r"""GET a WebhookInstance
        GET a WebhookInstance from the queue. After processing it successfully, DELETE it and GET the next one. When a 204 is received, the queue is empty and the polling process can sleep for a while.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhook_instances/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhookInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.webhook_instance = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    