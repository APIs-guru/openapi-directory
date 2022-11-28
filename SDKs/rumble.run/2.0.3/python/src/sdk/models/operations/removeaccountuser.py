from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveAccountUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAccountUserSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAccountUserRequest:
    path_params: RemoveAccountUserPathParams = field()
    security: RemoveAccountUserSecurity = field()
    

@dataclass
class RemoveAccountUserResponse:
    content_type: str = field()
    status_code: int = field()
    
