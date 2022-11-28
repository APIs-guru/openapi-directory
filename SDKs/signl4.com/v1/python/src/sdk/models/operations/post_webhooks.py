from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWebhooksRequests:
    webhook_base_info: Optional[shared.WebhookBaseInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    webhook_base_info1: Optional[shared.WebhookBaseInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    webhook_base_info2: Optional[shared.WebhookBaseInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    webhook_base_info3: Optional[shared.WebhookBaseInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostWebhooksRequest:
    request: Optional[PostWebhooksRequests] = field(default=None)
    

@dataclass
class PostWebhooksResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    post_webhooks_201_application_json_string: Optional[str] = field(default=None)
    post_webhooks_201_text_json_string: Optional[str] = field(default=None)
    post_webhooks_201_text_plain_string: Optional[str] = field(default=None)
    
