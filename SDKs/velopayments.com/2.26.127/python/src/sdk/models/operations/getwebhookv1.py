from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetWebhookV1PathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhookV1Request:
    path_params: GetWebhookV1PathParams = field()
    

@dataclass
class GetWebhookV1Response:
    content_type: str = field()
    status_code: int = field()
    webhook_response: Optional[shared.WebhookResponse] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
