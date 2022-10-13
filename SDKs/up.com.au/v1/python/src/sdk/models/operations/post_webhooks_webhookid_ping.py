from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksWebhookIDPingPathParams:
    webhook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhooksWebhookIDPingRequest:
    path_params: PostWebhooksWebhookIDPingPathParams = field(default=None)
    

@dataclass
class PostWebhooksWebhookIDPingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhook_event_callback: Optional[shared.WebhookEventCallback] = field(default=None)
    
