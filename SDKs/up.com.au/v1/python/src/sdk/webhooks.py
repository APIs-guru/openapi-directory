import requests
from typing import Optional
from sdk.models import shared, operations
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

    
    def delete_webhooks_id_(self, request: operations.DeleteWebhooksIDRequest) -> operations.DeleteWebhooksIDResponse:
        r"""Delete webhook
        Delete a specific webhook by providing its unique identifier. Once
        deleted, webhook events will no longer be sent to the configured URL.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_webhooks(self, request: operations.GetWebhooksRequest) -> operations.GetWebhooksResponse:
        r"""List webhooks
        Retrieve a list of configured webhooks. The returned list is
        [paginated](#pagination) and can be scrolled by following the `next`
        and `prev` links where present. Results are ordered oldest first to
        newest last.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListWebhooksResponse])
                res.list_webhooks_response = out

        return res

    
    def get_webhooks_id_(self, request: operations.GetWebhooksIDRequest) -> operations.GetWebhooksIDResponse:
        r"""Retrieve webhook
        Retrieve a specific webhook by providing its unique identifier.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetWebhookResponse])
                res.get_webhook_response = out

        return res

    
    def get_webhooks_webhook_id_logs(self, request: operations.GetWebhooksWebhookIDLogsRequest) -> operations.GetWebhooksWebhookIDLogsResponse:
        r"""List webhook logs
        Retrieve a list of delivery logs for a webhook by providing its unique
        identifier. This is useful for analysis and debugging purposes. The
        returned list is [paginated](#pagination) and can be scrolled by
        following the `next` and `prev` links where present. Results are ordered
        newest first to oldest last. Logs may be automatically purged after a
        period of time.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhookId}/logs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksWebhookIDLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListWebhookDeliveryLogsResponse])
                res.list_webhook_delivery_logs_response = out

        return res

    
    def post_webhooks_webhook_id_ping(self, request: operations.PostWebhooksWebhookIDPingRequest) -> operations.PostWebhooksWebhookIDPingResponse:
        r"""Ping webhook
        Send a `PING` event to a webhook by providing its unique identifier.
        This is useful for testing and debugging purposes. The event is delivered
        asynchronously and its data is returned in the response to this request.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhookId}/ping", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksWebhookIDPingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookEventCallback])
                res.webhook_event_callback = out

        return res

    