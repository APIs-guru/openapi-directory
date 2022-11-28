from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PingWebhookV1PathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PingWebhookV1Request:
    path_params: PingWebhookV1PathParams = field()
    

@dataclass
class PingWebhookV1Response:
    content_type: str = field()
    status_code: int = field()
    ping_response: Optional[shared.PingResponse] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
