from dataclasses import dataclass, field



@dataclass
class RemoveAccountUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAccountUserSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAccountUserRequest:
    path_params: RemoveAccountUserPathParams = field(default=None)
    security: RemoveAccountUserSecurity = field(default=None)
    

@dataclass
class RemoveAccountUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
