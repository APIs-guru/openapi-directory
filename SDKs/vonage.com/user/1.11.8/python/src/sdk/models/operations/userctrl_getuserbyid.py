from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserCtrlGetUserByIDPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserCtrlGetUserByIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UserCtrlGetUserByIDRequest:
    path_params: UserCtrlGetUserByIDPathParams = field()
    security: UserCtrlGetUserByIDSecurity = field()
    

@dataclass
class UserCtrlGetUserByIDResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user_hal_response: Optional[shared.UserHalResponse] = field(default=None)
    
