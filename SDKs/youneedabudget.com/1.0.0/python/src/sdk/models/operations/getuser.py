from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
