from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpdateAccountUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAccountUserSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAccountUserRequest:
    path_params: UpdateAccountUserPathParams = field(default=None)
    request: shared.UserOptions = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAccountUserSecurity = field(default=None)
    

@dataclass
class UpdateAccountUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
