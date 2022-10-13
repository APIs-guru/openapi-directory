from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksWebhookIDDisablePathParams:
    webhook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWebhooksWebhookIDDisableRequest:
    path_params: PostWebhooksWebhookIDDisablePathParams = field(default=None)
    

@dataclass
class PostWebhooksWebhookIDDisableResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    webhook_info: Optional[shared.WebhookInfo] = field(default=None)
    
