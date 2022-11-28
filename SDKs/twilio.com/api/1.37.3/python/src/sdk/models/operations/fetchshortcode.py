from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SHORT_CODE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchShortCodePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchShortCodeRequest:
    path_params: FetchShortCodePathParams = field()
    security: FetchShortCodeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchShortCodeResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_short_code: Optional[shared.APIV2010AccountShortCode] = field(default=None)
    
