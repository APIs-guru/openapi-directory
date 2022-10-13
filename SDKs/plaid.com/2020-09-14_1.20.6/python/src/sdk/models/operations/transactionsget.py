from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TransactionsGetRequest:
    request: shared.TransactionsGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TransactionsGetResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    transactions_get_response: Optional[dict[str, Any]] = field(default=None)
    
