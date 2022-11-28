from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BankTransferBalanceGetRequest:
    request: shared.BankTransferBalanceGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankTransferBalanceGetResponse:
    content_type: str = field()
    status_code: int = field()
    bank_transfer_balance_get_response: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
