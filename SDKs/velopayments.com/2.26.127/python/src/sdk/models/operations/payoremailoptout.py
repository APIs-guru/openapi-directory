from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PayorEmailOptOutPathParams:
    payor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayorEmailOptOutRequest:
    path_params: PayorEmailOptOutPathParams = field(default=None)
    request: shared.PayorEmailOptOutRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PayorEmailOptOutResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
