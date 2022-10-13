from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SERVICE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceConversationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateServiceConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceConversationPathParams = field(default=None)
    headers: UpdateServiceConversationHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceConversationSecurity = field(default=None)
    

@dataclass
class UpdateServiceConversationResponses:
    conversations_v1_service_service_conversation: Optional[shared.ConversationsV1ServiceServiceConversation] = field(default=None)
    

@dataclass
class UpdateServiceConversationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateServiceConversationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
