from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatePaymentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePaymentRequest:
    request: shared.CreatePaymentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePaymentSecurity = field(default=None)
    

@dataclass
class CreatePaymentResponse:
    content_type: str = field(default=None)
    create_payment_response: Optional[shared.CreatePaymentResponse] = field(default=None)
    status_code: int = field(default=None)
    
