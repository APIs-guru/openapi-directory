from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


DELETE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteConversationMessagePathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConversationMessageRequest:
    headers: DeleteConversationMessageHeaders = field()
    path_params: DeleteConversationMessagePathParams = field()
    security: DeleteConversationMessageSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteConversationMessageResponse:
    content_type: str = field()
    status_code: int = field()
    
