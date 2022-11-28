from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountResponse:
    content_type: str = field()
    status_code: int = field()
    account: Optional[shared.Account] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
