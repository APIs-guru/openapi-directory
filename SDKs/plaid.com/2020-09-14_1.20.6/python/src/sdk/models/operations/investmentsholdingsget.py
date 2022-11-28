from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InvestmentsHoldingsGetRequest:
    request: shared.InvestmentsHoldingsGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvestmentsHoldingsGetResponse:
    content_type: str = field()
    status_code: int = field()
    investments_holdings_get_response: Optional[dict[str, Any]] = field(default=None)
    
