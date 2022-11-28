from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class FetchTrunkPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrunkRequest:
    path_params: FetchTrunkPathParams = field()
    security: FetchTrunkSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTrunkResponse:
    content_type: str = field()
    status_code: int = field()
    trunking_v1_trunk: Optional[shared.TrunkingV1Trunk] = field(default=None)
    
