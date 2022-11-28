from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_USER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class FetchUserPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUserRequest:
    path_params: FetchUserPathParams = field()
    security: FetchUserSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUserResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v2_service_user: Optional[shared.ChatV2ServiceUser] = field(default=None)
    
