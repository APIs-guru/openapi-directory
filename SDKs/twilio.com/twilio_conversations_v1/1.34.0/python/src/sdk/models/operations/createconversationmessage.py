from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateConversationMessagePathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class CreateConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConversationMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateConversationMessagePathParams = field(default=None)
    headers: CreateConversationMessageHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateConversationMessageSecurity = field(default=None)
    

@dataclass
class CreateConversationMessageResponses:
    conversations_v1_conversation_conversation_message: Optional[shared.ConversationsV1ConversationConversationMessage] = field(default=None)
    

@dataclass
class CreateConversationMessageResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateConversationMessageResponses]] = field(default=None)
    status_code: int = field(default=None)
    
