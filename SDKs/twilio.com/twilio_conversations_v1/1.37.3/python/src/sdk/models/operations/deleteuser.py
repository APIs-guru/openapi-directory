from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


DELETE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteUserPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserHeaders:
    x_twilio_webhook_enabled: Optional[shared.UserEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUserRequest:
    headers: DeleteUserHeaders = field()
    path_params: DeleteUserPathParams = field()
    security: DeleteUserSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUserResponse:
    content_type: str = field()
    status_code: int = field()
    
