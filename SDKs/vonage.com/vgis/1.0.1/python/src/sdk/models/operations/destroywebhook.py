from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DestroyWebhookPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DestroyWebhookRequest:
    path_params: DestroyWebhookPathParams = field(default=None)
    

@dataclass
class DestroyWebhookResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
