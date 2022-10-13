from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InvestmentsHoldingsGetRequest:
    request: shared.InvestmentsHoldingsGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvestmentsHoldingsGetResponse:
    content_type: str = field(default=None)
    investments_holdings_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
