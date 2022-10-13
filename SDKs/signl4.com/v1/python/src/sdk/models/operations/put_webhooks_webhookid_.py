from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutWebhooksWebhookIDPathParams:
    webhook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWebhooksWebhookIDRequests:
    webhook_base_info: Optional[shared.WebhookBaseInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    webhook_base_info1: Optional[shared.WebhookBaseInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    webhook_base_info2: Optional[shared.WebhookBaseInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    webhook_base_info3: Optional[shared.WebhookBaseInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutWebhooksWebhookIDRequest:
    path_params: PutWebhooksWebhookIDPathParams = field(default=None)
    request: Optional[PutWebhooksWebhookIDRequests] = field(default=None)
    

@dataclass
class PutWebhooksWebhookIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    webhook_info: Optional[shared.WebhookInfo] = field(default=None)
    
