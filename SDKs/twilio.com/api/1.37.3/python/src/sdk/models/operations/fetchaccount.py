from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchAccountPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAccountSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAccountRequest:
    path_params: FetchAccountPathParams = field()
    security: FetchAccountSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchAccountResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account: Optional[shared.APIV2010Account] = field(default=None)
    
