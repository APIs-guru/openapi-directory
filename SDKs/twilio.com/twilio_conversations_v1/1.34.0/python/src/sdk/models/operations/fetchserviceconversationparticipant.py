from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SERVICE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceConversationParticipantPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceConversationParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceConversationParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchServiceConversationParticipantPathParams = field(default=None)
    security: FetchServiceConversationParticipantSecurity = field(default=None)
    

@dataclass
class FetchServiceConversationParticipantResponses:
    conversations_v1_service_service_conversation_service_conversation_participant: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant] = field(default=None)
    

@dataclass
class FetchServiceConversationParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchServiceConversationParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
