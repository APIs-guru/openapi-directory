from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelPaymentByIdempotencyKeySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelPaymentByIdempotencyKeyRequest:
    request: shared.CancelPaymentByIdempotencyKeyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CancelPaymentByIdempotencyKeySecurity = field(default=None)
    

@dataclass
class CancelPaymentByIdempotencyKeyResponse:
    cancel_payment_by_idempotency_key_response: Optional[shared.CancelPaymentByIdempotencyKeyResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
