from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AuthenticatePostPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthenticatePostRequest:
    path_params: AuthenticatePostPathParams = field()
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AuthenticatePostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
