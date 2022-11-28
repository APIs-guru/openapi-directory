from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUtilPingResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    ping_response: Optional[shared.PingResponse] = field(default=None)
    
