from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class EmulationOutputRequest:
    request: Any = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class EmulationOutputResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
