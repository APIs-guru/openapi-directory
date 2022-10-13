from dataclasses import dataclass, field



@dataclass
class ResetAccountUserLockoutPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetAccountUserLockoutSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResetAccountUserLockoutRequest:
    path_params: ResetAccountUserLockoutPathParams = field(default=None)
    security: ResetAccountUserLockoutSecurity = field(default=None)
    

@dataclass
class ResetAccountUserLockoutResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
