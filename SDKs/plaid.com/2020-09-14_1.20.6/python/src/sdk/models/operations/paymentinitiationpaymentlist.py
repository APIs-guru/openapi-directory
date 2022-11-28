from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentInitiationPaymentListRequest:
    request: shared.PaymentInitiationPaymentListRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentInitiationPaymentListResponse:
    content_type: str = field()
    status_code: int = field()
    payment_initiation_payment_list_response: Optional[dict[str, Any]] = field(default=None)
    
