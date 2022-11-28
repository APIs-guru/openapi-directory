from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DestroyWebhookPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DestroyWebhookRequest:
    path_params: DestroyWebhookPathParams = field()
    

@dataclass
class DestroyWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
