from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


DELETE_SERVICE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceUserPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceUserHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceUserEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceUserRequest:
    headers: DeleteServiceUserHeaders = field()
    path_params: DeleteServiceUserPathParams = field()
    security: DeleteServiceUserSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteServiceUserResponse:
    content_type: str = field()
    status_code: int = field()
    
