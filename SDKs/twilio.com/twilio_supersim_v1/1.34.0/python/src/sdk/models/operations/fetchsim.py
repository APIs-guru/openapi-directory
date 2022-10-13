from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchSimPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSimRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSimPathParams = field(default=None)
    security: FetchSimSecurity = field(default=None)
    

@dataclass
class FetchSimResponses:
    supersim_v1_sim: Optional[shared.SupersimV1Sim] = field(default=None)
    

@dataclass
class FetchSimResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSimResponses]] = field(default=None)
    status_code: int = field(default=None)
    
