from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSelfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
