from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_USER_SERVERS = [
	"https://frontline-api.twilio.com",
]


@dataclass
class UpdateUserPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserUpdateUserRequest:
    avatar: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Avatar' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    is_available: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IsAvailable' }})
    state: Optional[shared.UserEnumStateTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'State' }})
    

@dataclass
class UpdateUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUserPathParams = field(default=None)
    request: Optional[UpdateUserUpdateUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUserSecurity = field(default=None)
    

@dataclass
class UpdateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    frontline_v1_user: Optional[shared.FrontlineV1User] = field(default=None)
    
