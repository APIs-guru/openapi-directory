from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceConversationMessagePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceConversationMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchServiceConversationMessagePathParams = field(default=None)
    security: FetchServiceConversationMessageSecurity = field(default=None)
    

@dataclass
class FetchServiceConversationMessageResponses:
    conversations_v1_service_service_conversation_service_conversation_message: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage] = field(default=None)
    

@dataclass
class FetchServiceConversationMessageResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchServiceConversationMessageResponses]] = field(default=None)
    status_code: int = field(default=None)
    
