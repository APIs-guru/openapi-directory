from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SERVICE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceConversationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchServiceConversationPathParams = field(default=None)
    security: FetchServiceConversationSecurity = field(default=None)
    

@dataclass
class FetchServiceConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_conversation: Optional[shared.ConversationsV1ServiceServiceConversation] = field(default=None)
    
