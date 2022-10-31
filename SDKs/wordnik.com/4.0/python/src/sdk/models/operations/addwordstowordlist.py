from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class AddWordsToWordListPathParams:
    permalink: str = field(default=None, metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddWordsToWordListHeaders:
    auth_token: str = field(default=None, metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddWordsToWordListRequest:
    path_params: AddWordsToWordListPathParams = field(default=None)
    headers: AddWordsToWordListHeaders = field(default=None)
    request: Optional[List[Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddWordsToWordListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
