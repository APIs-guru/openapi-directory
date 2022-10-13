from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BankTransferCreateRequest:
    request: shared.BankTransferCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankTransferCreateResponse:
    bank_transfer_create_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
