from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class HealthGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    
