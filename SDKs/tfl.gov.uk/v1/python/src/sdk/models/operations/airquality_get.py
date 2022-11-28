from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class AirQualityGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
