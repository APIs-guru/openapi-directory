from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CleanScansPageResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[Any] = field(default=None)
    
