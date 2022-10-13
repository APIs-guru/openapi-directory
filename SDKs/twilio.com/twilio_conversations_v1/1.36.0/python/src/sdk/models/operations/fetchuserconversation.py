from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchUserConversationPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUserConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUserConversationPathParams = field(default=None)
    security: FetchUserConversationSecurity = field(default=None)
    

@dataclass
class FetchUserConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_user_user_conversation: Optional[shared.ConversationsV1UserUserConversation] = field(default=None)
    
