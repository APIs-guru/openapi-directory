from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_USER_INFO_SERVERS = [
	"https://oauth.twilio.com",
]


@dataclass
class FetchUserInfoSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUserInfoRequest:
    security: FetchUserInfoSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUserInfoResponse:
    content_type: str = field()
    status_code: int = field()
    oauth_v1_user_info: Optional[shared.OauthV1UserInfo] = field(default=None)
    
