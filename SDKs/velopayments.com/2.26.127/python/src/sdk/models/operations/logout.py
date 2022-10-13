from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LogoutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
