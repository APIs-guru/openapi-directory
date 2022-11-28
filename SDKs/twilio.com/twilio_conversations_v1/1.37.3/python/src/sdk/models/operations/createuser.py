from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateUserHeaders:
    x_twilio_webhook_enabled: Optional[shared.UserEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

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
    headers: CreateUserHeaders = field()
    security: CreateUserSecurity = field()
    request: Optional[CreateUserCreateUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUserResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_user: Optional[shared.ConversationsV1User] = field(default=None)
    
