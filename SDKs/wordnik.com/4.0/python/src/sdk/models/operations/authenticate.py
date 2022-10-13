from dataclasses import dataclass, field



@dataclass
class AuthenticatePathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthenticateQueryParams:
    password: str = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthenticateRequest:
    path_params: AuthenticatePathParams = field(default=None)
    query_params: AuthenticateQueryParams = field(default=None)
    

@dataclass
class AuthenticateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
