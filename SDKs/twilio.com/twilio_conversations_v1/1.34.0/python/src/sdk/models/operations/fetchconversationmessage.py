from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConversationMessagePathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConversationMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConversationMessagePathParams = field(default=None)
    security: FetchConversationMessageSecurity = field(default=None)
    

@dataclass
class FetchConversationMessageResponses:
    conversations_v1_conversation_conversation_message: Optional[shared.ConversationsV1ConversationConversationMessage] = field(default=None)
    

@dataclass
class FetchConversationMessageResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchConversationMessageResponses]] = field(default=None)
    status_code: int = field(default=None)
    
