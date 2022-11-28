from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ViewWebhookPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewWebhookRequest:
    path_params: ViewWebhookPathParams = field()
    

@dataclass
class ViewWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
