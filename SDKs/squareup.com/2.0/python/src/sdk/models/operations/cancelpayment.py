from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelPaymentPathParams:
    payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelPaymentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelPaymentRequest:
    path_params: CancelPaymentPathParams = field(default=None)
    security: CancelPaymentSecurity = field(default=None)
    

@dataclass
class CancelPaymentResponse:
    cancel_payment_response: Optional[shared.CancelPaymentResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
