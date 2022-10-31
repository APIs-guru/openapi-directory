from dataclasses import dataclass, field
from typing import List


@dataclass
class GetWordListByPermalinkPathParams:
    permalink: str = field(default=None, metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWordListByPermalinkHeaders:
    auth_token: str = field(default=None, metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWordListByPermalinkRequest:
    path_params: GetWordListByPermalinkPathParams = field(default=None)
    headers: GetWordListByPermalinkHeaders = field(default=None)
    

@dataclass
class GetWordListByPermalinkResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
