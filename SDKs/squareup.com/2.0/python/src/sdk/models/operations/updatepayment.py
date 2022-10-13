from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePaymentPathParams:
    payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePaymentRequest:
    path_params: UpdatePaymentPathParams = field(default=None)
    request: shared.UpdatePaymentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePaymentSecurity = field(default=None)
    

@dataclass
class UpdatePaymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_payment_response: Optional[shared.UpdatePaymentResponse] = field(default=None)
    
