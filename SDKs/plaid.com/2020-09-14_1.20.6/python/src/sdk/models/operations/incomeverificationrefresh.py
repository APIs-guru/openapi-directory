from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class IncomeVerificationRefreshRequest:
    request: shared.IncomeVerificationRefreshRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IncomeVerificationRefreshResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    income_verification_refresh_response: Optional[shared.IncomeVerificationRefreshResponse] = field(default=None)
    
