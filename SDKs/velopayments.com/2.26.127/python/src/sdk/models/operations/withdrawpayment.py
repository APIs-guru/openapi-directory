from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WithdrawPaymentPathParams:
    payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class WithdrawPaymentRequest:
    path_params: WithdrawPaymentPathParams = field(default=None)
    request: shared.WithdrawPaymentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WithdrawPaymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
