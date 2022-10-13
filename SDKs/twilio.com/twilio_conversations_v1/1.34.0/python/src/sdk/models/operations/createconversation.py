from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class CreateConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConversationRequest:
    server_url: Optional[str] = field(default=None)
    headers: CreateConversationHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateConversationSecurity = field(default=None)
    

@dataclass
class CreateConversationResponses:
    conversations_v1_conversation: Optional[shared.ConversationsV1Conversation] = field(default=None)
    

@dataclass
class CreateConversationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateConversationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
