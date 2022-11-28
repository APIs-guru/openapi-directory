from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConversationMessagePathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConversationMessageRequest:
    path_params: FetchConversationMessagePathParams = field()
    security: FetchConversationMessageSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchConversationMessageResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_conversation_conversation_message: Optional[shared.ConversationsV1ConversationConversationMessage] = field(default=None)
    
