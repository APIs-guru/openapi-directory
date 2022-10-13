from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_USER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateUserPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUserRequestBodyCreateUserRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identity: str = field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class CreateUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUserPathParams = field(default=None)
    request: Optional[CreateUserRequestBodyCreateUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUserSecurity = field(default=None)
    

@dataclass
class CreateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ip_messaging_v1_service_user: Optional[shared.IPMessagingV1ServiceUser] = field(default=None)
    
