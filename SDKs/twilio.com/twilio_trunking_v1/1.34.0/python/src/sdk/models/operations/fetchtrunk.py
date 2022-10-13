from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class FetchTrunkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrunkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTrunkPathParams = field(default=None)
    security: FetchTrunkSecurity = field(default=None)
    

@dataclass
class FetchTrunkResponses:
    trunking_v1_trunk: Optional[shared.TrunkingV1Trunk] = field(default=None)
    

@dataclass
class FetchTrunkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTrunkResponses]] = field(default=None)
    status_code: int = field(default=None)
    
