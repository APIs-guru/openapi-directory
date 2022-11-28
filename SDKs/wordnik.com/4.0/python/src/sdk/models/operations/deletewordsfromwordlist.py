from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class DeleteWordsFromWordListPathParams:
    permalink: str = field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWordsFromWordListHeaders:
    auth_token: str = field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWordsFromWordListRequest:
    headers: DeleteWordsFromWordListHeaders = field()
    path_params: DeleteWordsFromWordListPathParams = field()
    request: Optional[List[Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteWordsFromWordListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
