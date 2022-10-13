from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWebhooksWebhookIDLogsPathParams:
    webhook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksWebhookIDLogsQueryParams:
    page_size_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWebhooksWebhookIDLogsRequest:
    path_params: GetWebhooksWebhookIDLogsPathParams = field(default=None)
    query_params: GetWebhooksWebhookIDLogsQueryParams = field(default=None)
    

@dataclass
class GetWebhooksWebhookIDLogsResponse:
    content_type: str = field(default=None)
    list_webhook_delivery_logs_response: Optional[shared.ListWebhookDeliveryLogsResponse] = field(default=None)
    status_code: int = field(default=None)
    
