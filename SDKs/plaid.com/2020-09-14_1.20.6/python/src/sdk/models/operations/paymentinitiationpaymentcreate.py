from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentInitiationPaymentCreateRequest:
    request: shared.PaymentInitiationPaymentCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentInitiationPaymentCreateResponse:
    content_type: str = field()
    status_code: int = field()
    payment_initiation_payment_create_response: Optional[dict[str, Any]] = field(default=None)
    
