from dataclasses import dataclass, field



@dataclass
class GetAccountUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountUserSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountUserRequest:
    path_params: GetAccountUserPathParams = field(default=None)
    security: GetAccountUserSecurity = field(default=None)
    

@dataclass
class GetAccountUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
