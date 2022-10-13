from dataclasses import dataclass, field
from typing import Optional
DELETE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteConversationScopedWebhookPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConversationScopedWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteConversationScopedWebhookPathParams = field(default=None)
    security: DeleteConversationScopedWebhookSecurity = field(default=None)
    

@dataclass
class DeleteConversationScopedWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
