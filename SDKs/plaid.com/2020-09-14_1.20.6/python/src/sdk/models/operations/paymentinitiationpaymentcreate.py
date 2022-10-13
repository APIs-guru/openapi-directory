from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentInitiationPaymentCreateRequest:
    request: shared.PaymentInitiationPaymentCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentInitiationPaymentCreateResponse:
    content_type: str = field(default=None)
    payment_initiation_payment_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
