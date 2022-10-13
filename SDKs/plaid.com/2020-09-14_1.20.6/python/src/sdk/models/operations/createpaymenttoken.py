from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreatePaymentTokenRequest:
    request: shared.PaymentInitiationPaymentTokenCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePaymentTokenResponse:
    content_type: str = field(default=None)
    payment_initiation_payment_token_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
