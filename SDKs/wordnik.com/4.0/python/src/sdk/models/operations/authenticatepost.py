from dataclasses import dataclass, field



@dataclass
class AuthenticatePostPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthenticatePostRequest:
    path_params: AuthenticatePostPathParams = field(default=None)
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AuthenticatePostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
