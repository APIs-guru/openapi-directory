from dataclasses import dataclass, field
from typing import Any


@dataclass
class ApplyYaraRulesRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ApplyYaraRulesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
