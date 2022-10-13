from dataclasses import dataclass, field



@dataclass
class ResetAccountUserMfaPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetAccountUserMfaSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResetAccountUserMfaRequest:
    path_params: ResetAccountUserMfaPathParams = field(default=None)
    security: ResetAccountUserMfaSecurity = field(default=None)
    

@dataclass
class ResetAccountUserMfaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
