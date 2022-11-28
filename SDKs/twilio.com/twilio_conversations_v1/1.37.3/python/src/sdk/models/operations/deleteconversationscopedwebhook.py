from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteConversationScopedWebhookPathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConversationScopedWebhookRequest:
    path_params: DeleteConversationScopedWebhookPathParams = field()
    security: DeleteConversationScopedWebhookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteConversationScopedWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    
