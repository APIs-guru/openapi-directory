from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPITokenStatusHeaders:
    api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPITokenStatusRequest:
    headers: GetAPITokenStatusHeaders = field()
    

@dataclass
class GetAPITokenStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
