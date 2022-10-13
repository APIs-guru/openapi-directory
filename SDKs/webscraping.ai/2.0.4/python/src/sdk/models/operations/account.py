from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountResponse:
    account: Optional[shared.Account] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
