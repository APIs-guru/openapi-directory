from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateWordListHeaders:
    auth_token: str = field(default=None, metadata={'header': { 'field_name': 'auth_token' }})
    

@dataclass
class CreateWordListRequest:
    headers: CreateWordListHeaders = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWordListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
