from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPITokenStatusHeaders:
    api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPITokenStatusRequest:
    headers: GetAPITokenStatusHeaders = field(default=None)
    

@dataclass
class GetAPITokenStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
