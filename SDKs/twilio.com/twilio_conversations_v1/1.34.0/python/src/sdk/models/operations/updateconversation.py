from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConversationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConversationPathParams = field(default=None)
    headers: UpdateConversationHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConversationSecurity = field(default=None)
    

@dataclass
class UpdateConversationResponses:
    conversations_v1_conversation: Optional[shared.ConversationsV1Conversation] = field(default=None)
    

@dataclass
class UpdateConversationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateConversationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
