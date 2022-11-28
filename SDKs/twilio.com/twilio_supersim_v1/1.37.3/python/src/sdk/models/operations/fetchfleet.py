from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FLEET_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchFleetPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFleetRequest:
    path_params: FetchFleetPathParams = field()
    security: FetchFleetSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFleetResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_fleet: Optional[shared.SupersimV1Fleet] = field(default=None)
    
