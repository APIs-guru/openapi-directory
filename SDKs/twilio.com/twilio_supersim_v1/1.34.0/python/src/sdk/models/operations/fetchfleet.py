from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_FLEET_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchFleetPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFleetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchFleetPathParams = field(default=None)
    security: FetchFleetSecurity = field(default=None)
    

@dataclass
class FetchFleetResponses:
    supersim_v1_fleet: Optional[shared.SupersimV1Fleet] = field(default=None)
    

@dataclass
class FetchFleetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchFleetResponses]] = field(default=None)
    status_code: int = field(default=None)
    
