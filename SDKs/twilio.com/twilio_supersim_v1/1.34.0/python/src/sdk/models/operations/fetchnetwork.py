from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchNetworkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchNetworkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchNetworkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchNetworkPathParams = field(default=None)
    security: FetchNetworkSecurity = field(default=None)
    

@dataclass
class FetchNetworkResponses:
    supersim_v1_network: Optional[shared.SupersimV1Network] = field(default=None)
    

@dataclass
class FetchNetworkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchNetworkResponses]] = field(default=None)
    status_code: int = field(default=None)
    
