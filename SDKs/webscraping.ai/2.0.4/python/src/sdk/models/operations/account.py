from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountResponse:
    content_type: str = field()
    status_code: int = field()
    account: Optional[shared.Account] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
