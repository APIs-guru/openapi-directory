from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateWebhookV1PathParams:
    webhook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWebhookV1Request:
    path_params: UpdateWebhookV1PathParams = field(default=None)
    request: Optional[shared.UpdateWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWebhookV1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
