from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class IncomeVerificationPaystubsGetRequest:
    request: shared.IncomeVerificationPaystubsGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IncomeVerificationPaystubsGetResponse:
    content_type: str = field(default=None)
    income_verification_paystubs_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
