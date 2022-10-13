from dataclasses import dataclass, field
from typing import Optional
DELETE_SERVICE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceUserConversationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceUserConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteServiceUserConversationPathParams = field(default=None)
    security: DeleteServiceUserConversationSecurity = field(default=None)
    

@dataclass
class DeleteServiceUserConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
