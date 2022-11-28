from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


DELETE_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceConversationMessagePathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceConversationMessageRequest:
    headers: DeleteServiceConversationMessageHeaders = field()
    path_params: DeleteServiceConversationMessagePathParams = field()
    security: DeleteServiceConversationMessageSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteServiceConversationMessageResponse:
    content_type: str = field()
    status_code: int = field()
    
