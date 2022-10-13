from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentPathParams:
    payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentRequest:
    path_params: GetPaymentPathParams = field(default=None)
    security: GetPaymentSecurity = field(default=None)
    

@dataclass
class GetPaymentResponse:
    content_type: str = field(default=None)
    get_payment_response: Optional[shared.GetPaymentResponse] = field(default=None)
    status_code: int = field(default=None)
    
