from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ResetAccountUserLockoutPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetAccountUserLockoutSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResetAccountUserLockoutRequest:
    path_params: ResetAccountUserLockoutPathParams = field()
    security: ResetAccountUserLockoutSecurity = field()
    

@dataclass
class ResetAccountUserLockoutResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
