from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_USER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateUserPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUserPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUserSecurity = field(default=None)
    

@dataclass
class UpdateUserResponses:
    ip_messaging_v1_service_user: Optional[shared.IPMessagingV1ServiceUser] = field(default=None)
    

@dataclass
class UpdateUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
