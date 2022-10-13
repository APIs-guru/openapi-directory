from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompletePaymentPathParams:
    payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompletePaymentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CompletePaymentRequest:
    path_params: CompletePaymentPathParams = field(default=None)
    security: CompletePaymentSecurity = field(default=None)
    

@dataclass
class CompletePaymentResponse:
    complete_payment_response: Optional[shared.CompletePaymentResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
