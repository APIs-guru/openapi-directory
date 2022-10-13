from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentInitiationRecipientGetRequest:
    request: shared.PaymentInitiationRecipientGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentInitiationRecipientGetResponse:
    content_type: str = field(default=None)
    payment_initiation_recipient_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
