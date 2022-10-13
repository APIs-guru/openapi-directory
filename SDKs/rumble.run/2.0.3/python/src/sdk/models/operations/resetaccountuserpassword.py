from dataclasses import dataclass, field



@dataclass
class ResetAccountUserPasswordPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetAccountUserPasswordSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResetAccountUserPasswordRequest:
    path_params: ResetAccountUserPasswordPathParams = field(default=None)
    security: ResetAccountUserPasswordSecurity = field(default=None)
    

@dataclass
class ResetAccountUserPasswordResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
