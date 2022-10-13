from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateUserHeaders:
    x_twilio_webhook_enabled: Optional[shared.UserEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

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
    headers: CreateUserHeaders = field(default=None)
    request: Optional[CreateUserRequestBodyCreateUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUserSecurity = field(default=None)
    

@dataclass
class CreateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_user: Optional[shared.ConversationsV1User] = field(default=None)
    
