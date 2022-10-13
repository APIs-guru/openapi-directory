from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TRUNKS_SERVERS = [
	"https://routes.twilio.com",
]


@dataclass
class FetchTrunksPathParams:
    sip_trunk_domain: str = field(default=None, metadata={'path_param': { 'field_name': 'SipTrunkDomain', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrunksSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrunksRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTrunksPathParams = field(default=None)
    security: FetchTrunksSecurity = field(default=None)
    

@dataclass
class FetchTrunksResponses:
    routes_v2_trunks: Optional[shared.RoutesV2Trunks] = field(default=None)
    

@dataclass
class FetchTrunksResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTrunksResponses]] = field(default=None)
    status_code: int = field(default=None)
    
