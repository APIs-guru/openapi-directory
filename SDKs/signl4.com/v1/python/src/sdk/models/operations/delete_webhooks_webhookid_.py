from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteWebhooksWebhookIDPathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhooksWebhookIDRequest:
    path_params: DeleteWebhooksWebhookIDPathParams = field()
    

@dataclass
class DeleteWebhooksWebhookIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
