from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetWordListsForLoggedInUserQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWordListsForLoggedInUserHeaders:
    auth_token: str = field(default=None, metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWordListsForLoggedInUserRequest:
    query_params: GetWordListsForLoggedInUserQueryParams = field(default=None)
    headers: GetWordListsForLoggedInUserHeaders = field(default=None)
    

@dataclass
class GetWordListsForLoggedInUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
