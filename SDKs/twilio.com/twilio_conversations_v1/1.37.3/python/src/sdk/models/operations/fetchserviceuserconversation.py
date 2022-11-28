from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceUserConversationPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceUserConversationRequest:
    path_params: FetchServiceUserConversationPathParams = field()
    security: FetchServiceUserConversationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceUserConversationResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_user_service_user_conversation: Optional[shared.ConversationsV1ServiceServiceUserServiceUserConversation] = field(default=None)
    
