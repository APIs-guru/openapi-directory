from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class AddWordsToWordListPathParams:
    permalink: str = field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddWordsToWordListHeaders:
    auth_token: str = field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddWordsToWordListRequest:
    headers: AddWordsToWordListHeaders = field()
    path_params: AddWordsToWordListPathParams = field()
    request: Optional[List[Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddWordsToWordListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
