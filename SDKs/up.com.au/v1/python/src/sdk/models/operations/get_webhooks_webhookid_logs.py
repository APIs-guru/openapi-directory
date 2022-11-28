from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhooksWebhookIDLogsPathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksWebhookIDLogsQueryParams:
    page_size_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWebhooksWebhookIDLogsRequest:
    path_params: GetWebhooksWebhookIDLogsPathParams = field()
    query_params: GetWebhooksWebhookIDLogsQueryParams = field()
    

@dataclass
class GetWebhooksWebhookIDLogsResponse:
    content_type: str = field()
    status_code: int = field()
    list_webhook_delivery_logs_response: Optional[shared.ListWebhookDeliveryLogsResponse] = field(default=None)
    
