from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BankTransferEventListRequest:
    request: shared.BankTransferEventListRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankTransferEventListResponse:
    content_type: str = field()
    status_code: int = field()
    bank_transfer_event_list_response: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
