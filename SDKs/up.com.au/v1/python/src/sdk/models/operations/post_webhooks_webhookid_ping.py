from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksWebhookIDPingPathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhooksWebhookIDPingRequest:
    path_params: PostWebhooksWebhookIDPingPathParams = field()
    

@dataclass
class PostWebhooksWebhookIDPingResponse:
    content_type: str = field()
    status_code: int = field()
    webhook_event_callback: Optional[shared.WebhookEventCallback] = field(default=None)
    
