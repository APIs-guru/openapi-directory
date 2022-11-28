from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteUserConversationPathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUserConversationRequest:
    path_params: DeleteUserConversationPathParams = field()
    security: DeleteUserConversationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUserConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
