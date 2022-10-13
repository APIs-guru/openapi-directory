from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetIPResponse:
    content_type: str = field(default=None)
    date_time_json_response: Optional[Any] = field(default=None)
    error_json_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
