from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
