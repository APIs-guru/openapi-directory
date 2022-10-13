from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceConversationScopedWebhookPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceConversationScopedWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceConversationScopedWebhookPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceConversationScopedWebhookSecurity = field(default=None)
    

@dataclass
class UpdateServiceConversationScopedWebhookResponses:
    conversations_v1_service_service_conversation_service_conversation_scoped_webhook: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook] = field(default=None)
    

@dataclass
class UpdateServiceConversationScopedWebhookResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateServiceConversationScopedWebhookResponses]] = field(default=None)
    status_code: int = field(default=None)
    
