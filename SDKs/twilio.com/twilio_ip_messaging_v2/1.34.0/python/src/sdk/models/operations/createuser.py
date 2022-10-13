from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_USER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateUserPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUserHeaders:
    x_twilio_webhook_enabled: Optional[shared.UserEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class CreateUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUserPathParams = field(default=None)
    headers: CreateUserHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUserSecurity = field(default=None)
    

@dataclass
class CreateUserResponses:
    ip_messaging_v2_service_user: Optional[shared.IPMessagingV2ServiceUser] = field(default=None)
    

@dataclass
class CreateUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
