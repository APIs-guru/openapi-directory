from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetWordListsForLoggedInUserQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWordListsForLoggedInUserHeaders:
    auth_token: str = field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWordListsForLoggedInUserRequest:
    headers: GetWordListsForLoggedInUserHeaders = field()
    query_params: GetWordListsForLoggedInUserQueryParams = field()
    

@dataclass
class GetWordListsForLoggedInUserResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
