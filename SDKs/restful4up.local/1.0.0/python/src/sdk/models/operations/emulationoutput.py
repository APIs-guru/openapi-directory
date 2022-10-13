from dataclasses import dataclass, field
from typing import Any


@dataclass
class EmulationOutputRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class EmulationOutputResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
