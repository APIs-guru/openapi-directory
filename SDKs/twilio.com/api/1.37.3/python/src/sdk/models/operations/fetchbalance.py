from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_BALANCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchBalancePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBalanceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBalanceRequest:
    path_params: FetchBalancePathParams = field()
    security: FetchBalanceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchBalanceResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_balance: Optional[shared.APIV2010AccountBalance] = field(default=None)
    
