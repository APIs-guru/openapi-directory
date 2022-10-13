from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PaymentInitiationPaymentListRequest:
    request: shared.PaymentInitiationPaymentListRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentInitiationPaymentListResponse:
    content_type: str = field(default=None)
    payment_initiation_payment_list_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
