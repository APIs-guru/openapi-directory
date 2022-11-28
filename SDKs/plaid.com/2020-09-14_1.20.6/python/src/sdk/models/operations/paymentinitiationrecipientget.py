from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentInitiationRecipientGetRequest:
    request: shared.PaymentInitiationRecipientGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentInitiationRecipientGetResponse:
    content_type: str = field()
    status_code: int = field()
    payment_initiation_recipient_get_response: Optional[dict[str, Any]] = field(default=None)
    
