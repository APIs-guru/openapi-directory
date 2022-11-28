from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksWebhookIDEnablePathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhooksWebhookIDEnableRequest:
    path_params: PostWebhooksWebhookIDEnablePathParams = field()
    

@dataclass
class PostWebhooksWebhookIDEnableResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    webhook_info: Optional[shared.WebhookInfo] = field(default=None)
    
