from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TransactionsRefreshRequest:
    request: shared.TransactionsRefreshRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TransactionsRefreshResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    transactions_refresh_response: Optional[shared.TransactionsRefreshResponse] = field(default=None)
    
