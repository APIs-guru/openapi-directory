from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
DELETE_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceConversationMessagePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceConversationMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteServiceConversationMessagePathParams = field(default=None)
    headers: DeleteServiceConversationMessageHeaders = field(default=None)
    security: DeleteServiceConversationMessageSecurity = field(default=None)
    

@dataclass
class DeleteServiceConversationMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
