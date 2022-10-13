from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConversationParticipantPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared.ConversationParticipantEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateConversationParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConversationParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConversationParticipantPathParams = field(default=None)
    headers: UpdateConversationParticipantHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConversationParticipantSecurity = field(default=None)
    

@dataclass
class UpdateConversationParticipantResponses:
    conversations_v1_conversation_conversation_participant: Optional[shared.ConversationsV1ConversationConversationParticipant] = field(default=None)
    

@dataclass
class UpdateConversationParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateConversationParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
