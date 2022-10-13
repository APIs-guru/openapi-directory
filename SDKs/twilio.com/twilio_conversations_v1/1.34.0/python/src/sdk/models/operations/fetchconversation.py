from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConversationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConversationPathParams = field(default=None)
    security: FetchConversationSecurity = field(default=None)
    

@dataclass
class FetchConversationResponses:
    conversations_v1_conversation: Optional[shared.ConversationsV1Conversation] = field(default=None)
    

@dataclass
class FetchConversationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchConversationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
