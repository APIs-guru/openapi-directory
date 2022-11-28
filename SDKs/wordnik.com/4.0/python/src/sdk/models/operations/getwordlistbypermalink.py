from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetWordListByPermalinkPathParams:
    permalink: str = field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWordListByPermalinkHeaders:
    auth_token: str = field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWordListByPermalinkRequest:
    headers: GetWordListByPermalinkHeaders = field()
    path_params: GetWordListByPermalinkPathParams = field()
    

@dataclass
class GetWordListByPermalinkResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
