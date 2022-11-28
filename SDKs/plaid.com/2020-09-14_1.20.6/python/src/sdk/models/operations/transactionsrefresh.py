from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TransactionsRefreshRequest:
    request: shared.TransactionsRefreshRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TransactionsRefreshResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    transactions_refresh_response: Optional[shared.TransactionsRefreshResponse] = field(default=None)
    
