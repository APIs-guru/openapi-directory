from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
DELETE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteConversationMessagePathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class DeleteConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConversationMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteConversationMessagePathParams = field(default=None)
    headers: DeleteConversationMessageHeaders = field(default=None)
    security: DeleteConversationMessageSecurity = field(default=None)
    

@dataclass
class DeleteConversationMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
