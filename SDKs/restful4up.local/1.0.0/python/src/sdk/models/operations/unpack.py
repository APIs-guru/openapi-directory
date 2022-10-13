from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UnpackRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UnpackResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    unpack_200_wildcard_binary_string: Optional[bytes] = field(default=None)
    
