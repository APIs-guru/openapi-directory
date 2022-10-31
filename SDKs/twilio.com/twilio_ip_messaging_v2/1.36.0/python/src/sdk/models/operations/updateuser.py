from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_USER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateUserPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserHeaders:
    x_twilio_webhook_enabled: Optional[shared.UserEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserUpdateUserRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class UpdateUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUserPathParams = field(default=None)
    headers: UpdateUserHeaders = field(default=None)
    request: Optional[UpdateUserUpdateUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUserSecurity = field(default=None)
    

@dataclass
class UpdateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ip_messaging_v2_service_user: Optional[shared.IPMessagingV2ServiceUser] = field(default=None)
    
