from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UnpackRequest:
    request: Any = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UnpackResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    unpack_200_wildcard_binary_string: Optional[bytes] = field(default=None)
    
