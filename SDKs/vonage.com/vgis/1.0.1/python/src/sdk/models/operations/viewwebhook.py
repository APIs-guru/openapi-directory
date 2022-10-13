from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ViewWebhookPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewWebhookRequest:
    path_params: ViewWebhookPathParams = field(default=None)
    

@dataclass
class ViewWebhookResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
