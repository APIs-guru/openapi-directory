from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InvestmentsTransactionsGetRequest:
    request: shared.InvestmentsTransactionsGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvestmentsTransactionsGetResponse:
    content_type: str = field(default=None)
    investments_transactions_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
