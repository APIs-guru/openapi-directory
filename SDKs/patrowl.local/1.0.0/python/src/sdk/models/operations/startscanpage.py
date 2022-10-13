from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StartScanPageRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartScanPageResponse:
    api_response: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
