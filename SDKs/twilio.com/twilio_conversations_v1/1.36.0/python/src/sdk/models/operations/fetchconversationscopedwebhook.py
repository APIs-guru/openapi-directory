from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConversationScopedWebhookPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConversationScopedWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConversationScopedWebhookPathParams = field(default=None)
    security: FetchConversationScopedWebhookSecurity = field(default=None)
    

@dataclass
class FetchConversationScopedWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_conversation_conversation_scoped_webhook: Optional[shared.ConversationsV1ConversationConversationScopedWebhook] = field(default=None)
    
