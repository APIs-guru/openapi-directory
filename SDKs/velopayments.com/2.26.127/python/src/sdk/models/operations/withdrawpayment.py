from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WithdrawPaymentPathParams:
    payment_id: str = field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class WithdrawPaymentRequest:
    path_params: WithdrawPaymentPathParams = field()
    request: shared.WithdrawPaymentRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WithdrawPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
