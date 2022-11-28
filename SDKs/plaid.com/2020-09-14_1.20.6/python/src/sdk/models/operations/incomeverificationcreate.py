from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class IncomeVerificationCreateRequest:
    request: shared.IncomeVerificationCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IncomeVerificationCreateResponse:
    content_type: str = field()
    status_code: int = field()
    income_verification_create_response: Optional[dict[str, Any]] = field(default=None)
    
