from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentInitiationRecipientCreateRequest:
    request: shared.PaymentInitiationRecipientCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentInitiationRecipientCreateResponse:
    content_type: str = field(default=None)
    payment_initiation_recipient_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
