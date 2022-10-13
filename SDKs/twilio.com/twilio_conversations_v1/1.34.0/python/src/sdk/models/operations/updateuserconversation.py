from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateUserConversationPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUserConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUserConversationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUserConversationSecurity = field(default=None)
    

@dataclass
class UpdateUserConversationResponses:
    conversations_v1_user_user_conversation: Optional[shared.ConversationsV1UserUserConversation] = field(default=None)
    

@dataclass
class UpdateUserConversationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateUserConversationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
