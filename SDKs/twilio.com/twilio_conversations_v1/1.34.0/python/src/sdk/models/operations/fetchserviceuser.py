from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SERVICE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceUserPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchServiceUserPathParams = field(default=None)
    security: FetchServiceUserSecurity = field(default=None)
    

@dataclass
class FetchServiceUserResponses:
    conversations_v1_service_service_user: Optional[shared.ConversationsV1ServiceServiceUser] = field(default=None)
    

@dataclass
class FetchServiceUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchServiceUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
