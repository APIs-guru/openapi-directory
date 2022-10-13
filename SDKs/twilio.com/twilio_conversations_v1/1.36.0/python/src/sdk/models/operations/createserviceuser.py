from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_SERVICE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateServiceUserPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceUserHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceUserEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class CreateServiceUserRequestBodyCreateServiceUserRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identity: str = field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class CreateServiceUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateServiceUserPathParams = field(default=None)
    headers: CreateServiceUserHeaders = field(default=None)
    request: Optional[CreateServiceUserRequestBodyCreateServiceUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceUserSecurity = field(default=None)
    

@dataclass
class CreateServiceUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_user: Optional[shared.ConversationsV1ServiceServiceUser] = field(default=None)
    
