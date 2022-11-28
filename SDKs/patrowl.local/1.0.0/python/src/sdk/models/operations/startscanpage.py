from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StartScanPageRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartScanPageResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[Any] = field(default=None)
    
