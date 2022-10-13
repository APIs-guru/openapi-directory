from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchUserPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUserPathParams = field(default=None)
    security: FetchUserSecurity = field(default=None)
    

@dataclass
class FetchUserResponses:
    conversations_v1_user: Optional[shared.ConversationsV1User] = field(default=None)
    

@dataclass
class FetchUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
