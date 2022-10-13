from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrievePaymentPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrievePaymentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrievePaymentRequest:
    path_params: RetrievePaymentPathParams = field(default=None)
    security: RetrievePaymentSecurity = field(default=None)
    

@dataclass
class RetrievePaymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_payment: Optional[shared.V1Payment] = field(default=None)
    
