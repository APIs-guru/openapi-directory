from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConversationPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConversationRequest:
    path_params: FetchConversationPathParams = field()
    security: FetchConversationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchConversationResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_conversation: Optional[shared.ConversationsV1Conversation] = field(default=None)
    
