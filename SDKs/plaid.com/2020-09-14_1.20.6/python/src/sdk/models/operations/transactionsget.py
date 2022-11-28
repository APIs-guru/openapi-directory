from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TransactionsGetRequest:
    request: shared.TransactionsGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TransactionsGetResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    transactions_get_response: Optional[dict[str, Any]] = field(default=None)
    
