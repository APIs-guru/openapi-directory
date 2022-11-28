from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class IncomeVerificationPaystubsGetRequest:
    request: shared.IncomeVerificationPaystubsGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IncomeVerificationPaystubsGetResponse:
    content_type: str = field()
    status_code: int = field()
    income_verification_paystubs_get_response: Optional[dict[str, Any]] = field(default=None)
    
