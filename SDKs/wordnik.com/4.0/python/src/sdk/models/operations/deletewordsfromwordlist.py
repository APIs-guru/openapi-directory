from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class DeleteWordsFromWordListPathParams:
    permalink: str = field(default=None, metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWordsFromWordListHeaders:
    auth_token: str = field(default=None, metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWordsFromWordListRequest:
    path_params: DeleteWordsFromWordListPathParams = field(default=None)
    headers: DeleteWordsFromWordListHeaders = field(default=None)
    request: Optional[List[Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteWordsFromWordListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
