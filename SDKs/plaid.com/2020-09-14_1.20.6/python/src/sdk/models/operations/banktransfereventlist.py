from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class BankTransferEventListRequest:
    request: shared.BankTransferEventListRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankTransferEventListResponse:
    bank_transfer_event_list_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
