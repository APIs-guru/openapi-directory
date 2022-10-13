from dataclasses import dataclass, field
from typing import Optional
DELETE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceConversationScopedWebhookPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceConversationScopedWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteServiceConversationScopedWebhookPathParams = field(default=None)
    security: DeleteServiceConversationScopedWebhookSecurity = field(default=None)
    

@dataclass
class DeleteServiceConversationScopedWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
