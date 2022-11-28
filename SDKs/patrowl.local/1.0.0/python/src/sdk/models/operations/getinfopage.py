from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInfoPageResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[Any] = field(default=None)
    
