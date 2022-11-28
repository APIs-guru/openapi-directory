from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
