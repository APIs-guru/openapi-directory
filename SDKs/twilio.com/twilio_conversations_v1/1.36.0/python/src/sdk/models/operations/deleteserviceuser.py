from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
DELETE_SERVICE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceUserPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceUserHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceUserEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteServiceUserPathParams = field(default=None)
    headers: DeleteServiceUserHeaders = field(default=None)
    security: DeleteServiceUserSecurity = field(default=None)
    

@dataclass
class DeleteServiceUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
