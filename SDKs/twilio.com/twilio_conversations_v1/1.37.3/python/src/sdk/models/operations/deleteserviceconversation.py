from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


DELETE_SERVICE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceConversationPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceConversationRequest:
    headers: DeleteServiceConversationHeaders = field()
    path_params: DeleteServiceConversationPathParams = field()
    security: DeleteServiceConversationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteServiceConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
