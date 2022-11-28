from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SERVICE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceUserConversationPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceUserConversationRequest:
    path_params: DeleteServiceUserConversationPathParams = field()
    security: DeleteServiceUserConversationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteServiceUserConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
