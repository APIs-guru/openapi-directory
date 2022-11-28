from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentInitiationRecipientListRequest:
    request: shared.PaymentInitiationRecipientListRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentInitiationRecipientListResponse:
    content_type: str = field()
    status_code: int = field()
    payment_initiation_recipient_list_response: Optional[dict[str, Any]] = field(default=None)
    
