from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_SERVICE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateServiceUserPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceUserHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceUserEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceUserCreateServiceUserRequest:
    identity: str = field(metadata={'form': { 'field_name': 'Identity' }})
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class CreateServiceUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceUserRequest:
    headers: CreateServiceUserHeaders = field()
    path_params: CreateServiceUserPathParams = field()
    security: CreateServiceUserSecurity = field()
    request: Optional[CreateServiceUserCreateServiceUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateServiceUserResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_user: Optional[shared.ConversationsV1ServiceServiceUser] = field(default=None)
    
