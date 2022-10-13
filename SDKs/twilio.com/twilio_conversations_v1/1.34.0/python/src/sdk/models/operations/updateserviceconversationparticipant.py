from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceConversationParticipantPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateServiceConversationParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceConversationParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceConversationParticipantPathParams = field(default=None)
    headers: UpdateServiceConversationParticipantHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceConversationParticipantSecurity = field(default=None)
    

@dataclass
class UpdateServiceConversationParticipantResponses:
    conversations_v1_service_service_conversation_service_conversation_participant: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant] = field(default=None)
    

@dataclass
class UpdateServiceConversationParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateServiceConversationParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
