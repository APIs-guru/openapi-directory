from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchSimPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSimRequest:
    path_params: FetchSimPathParams = field()
    security: FetchSimSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSimResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_sim: Optional[shared.SupersimV1Sim] = field(default=None)
    
