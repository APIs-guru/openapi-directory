from dataclasses import dataclass, field



@dataclass
class GetLoggedInUserHeaders:
    auth_token: str = field(default=None, metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLoggedInUserRequest:
    headers: GetLoggedInUserHeaders = field(default=None)
    

@dataclass
class GetLoggedInUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
