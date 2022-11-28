from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InvestmentsTransactionsGetRequest:
    request: shared.InvestmentsTransactionsGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvestmentsTransactionsGetResponse:
    content_type: str = field()
    status_code: int = field()
    investments_transactions_get_response: Optional[dict[str, Any]] = field(default=None)
    
