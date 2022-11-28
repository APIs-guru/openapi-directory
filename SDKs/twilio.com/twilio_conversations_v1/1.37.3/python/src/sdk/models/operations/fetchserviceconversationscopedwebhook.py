from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceConversationScopedWebhookPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceConversationScopedWebhookRequest:
    path_params: FetchServiceConversationScopedWebhookPathParams = field()
    security: FetchServiceConversationScopedWebhookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceConversationScopedWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_conversation_service_conversation_scoped_webhook: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook] = field(default=None)
    
