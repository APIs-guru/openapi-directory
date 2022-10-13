from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetEmailNotBouncingResponse:
    content_type: str = field(default=None)
    current_user: Optional[shared.CurrentUser] = field(default=None)
    status_code: int = field(default=None)
    
