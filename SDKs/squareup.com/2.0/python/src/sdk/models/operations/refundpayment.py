from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RefundPaymentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RefundPaymentRequest:
    request: shared.RefundPaymentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RefundPaymentSecurity = field(default=None)
    

@dataclass
class RefundPaymentResponse:
    content_type: str = field(default=None)
    refund_payment_response: Optional[shared.RefundPaymentResponse] = field(default=None)
    status_code: int = field(default=None)
    
