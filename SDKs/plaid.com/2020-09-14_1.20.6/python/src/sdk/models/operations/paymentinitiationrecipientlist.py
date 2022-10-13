from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PaymentInitiationRecipientListRequest:
    request: shared.PaymentInitiationRecipientListRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PaymentInitiationRecipientListResponse:
    content_type: str = field(default=None)
    payment_initiation_recipient_list_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
