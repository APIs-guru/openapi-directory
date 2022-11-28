from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_USER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class CreateUserPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUserCreateUserRequest:
    identity: str = field(metadata={'form': { 'field_name': 'Identity' }})
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class CreateUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUserRequest:
    path_params: CreateUserPathParams = field()
    security: CreateUserSecurity = field()
    request: Optional[CreateUserCreateUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUserResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v1_service_user: Optional[shared.ChatV1ServiceUser] = field(default=None)
    
