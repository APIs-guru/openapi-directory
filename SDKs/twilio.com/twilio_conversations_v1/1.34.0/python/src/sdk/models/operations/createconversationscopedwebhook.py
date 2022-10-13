from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateConversationScopedWebhookPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConversationScopedWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateConversationScopedWebhookPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateConversationScopedWebhookSecurity = field(default=None)
    

@dataclass
class CreateConversationScopedWebhookResponses:
    conversations_v1_conversation_conversation_scoped_webhook: Optional[shared.ConversationsV1ConversationConversationScopedWebhook] = field(default=None)
    

@dataclass
class CreateConversationScopedWebhookResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateConversationScopedWebhookResponses]] = field(default=None)
    status_code: int = field(default=None)
    
