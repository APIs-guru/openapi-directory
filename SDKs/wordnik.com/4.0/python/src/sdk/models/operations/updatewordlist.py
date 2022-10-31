from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class UpdateWordListPathParams:
    permalink: str = field(default=None, metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWordListHeaders:
    auth_token: str = field(default=None, metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWordListRequest:
    path_params: UpdateWordListPathParams = field(default=None)
    headers: UpdateWordListHeaders = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWordListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
