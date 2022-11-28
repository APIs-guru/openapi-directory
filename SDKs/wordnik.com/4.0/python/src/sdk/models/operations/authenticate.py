from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AuthenticatePathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthenticateQueryParams:
    password: str = field(metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthenticateRequest:
    path_params: AuthenticatePathParams = field()
    query_params: AuthenticateQueryParams = field()
    

@dataclass
class AuthenticateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
