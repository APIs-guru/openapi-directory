from dataclasses import dataclass, field
from typing import Optional
DELETE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteUserConversationPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUserConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUserConversationPathParams = field(default=None)
    security: DeleteUserConversationSecurity = field(default=None)
    

@dataclass
class DeleteUserConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
