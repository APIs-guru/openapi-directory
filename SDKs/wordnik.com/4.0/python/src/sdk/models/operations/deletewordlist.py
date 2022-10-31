from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteWordListPathParams:
    permalink: str = field(default=None, metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWordListHeaders:
    auth_token: str = field(default=None, metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWordListRequest:
    path_params: DeleteWordListPathParams = field(default=None)
    headers: DeleteWordListHeaders = field(default=None)
    

@dataclass
class DeleteWordListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
