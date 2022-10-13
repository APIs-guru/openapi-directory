from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUtilPingResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    ping_response: Optional[shared.PingResponse] = field(default=None)
    status_code: int = field(default=None)
    
