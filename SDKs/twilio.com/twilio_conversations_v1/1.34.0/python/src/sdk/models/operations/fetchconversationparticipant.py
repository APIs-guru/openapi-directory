from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConversationParticipantPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConversationParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConversationParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConversationParticipantPathParams = field(default=None)
    security: FetchConversationParticipantSecurity = field(default=None)
    

@dataclass
class FetchConversationParticipantResponses:
    conversations_v1_conversation_conversation_participant: Optional[shared.ConversationsV1ConversationConversationParticipant] = field(default=None)
    

@dataclass
class FetchConversationParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchConversationParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
