from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetLoggedInUserHeaders:
    auth_token: str = field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLoggedInUserRequest:
    headers: GetLoggedInUserHeaders = field()
    

@dataclass
class GetLoggedInUserResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
