from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchAccountPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAccountSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAccountRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchAccountPathParams = field(default=None)
    security: FetchAccountSecurity = field(default=None)
    

@dataclass
class FetchAccountResponses:
    api_v2010_account: Optional[shared.APIV2010Account] = field(default=None)
    

@dataclass
class FetchAccountResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchAccountResponses]] = field(default=None)
    status_code: int = field(default=None)
    
