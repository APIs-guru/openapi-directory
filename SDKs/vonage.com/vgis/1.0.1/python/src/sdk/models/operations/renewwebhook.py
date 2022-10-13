from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RenewWebhookPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RenewWebhookRequest:
    path_params: RenewWebhookPathParams = field(default=None)
    

@dataclass
class RenewWebhookResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
