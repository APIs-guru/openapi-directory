from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceUserPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceUserRequest:
    path_params: FetchServiceUserPathParams = field()
    security: FetchServiceUserSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceUserResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_user: Optional[shared.ConversationsV1ServiceServiceUser] = field(default=None)
    
