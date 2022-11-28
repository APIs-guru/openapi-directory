from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteWordListPathParams:
    permalink: str = field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWordListHeaders:
    auth_token: str = field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWordListRequest:
    headers: DeleteWordListHeaders = field()
    path_params: DeleteWordListPathParams = field()
    

@dataclass
class DeleteWordListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
