from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class IncomeVerificationSummaryGetRequest:
    request: shared.IncomeVerificationSummaryGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IncomeVerificationSummaryGetResponse:
    content_type: str = field()
    status_code: int = field()
    income_verification_summary_get_response: Optional[dict[str, Any]] = field(default=None)
    
