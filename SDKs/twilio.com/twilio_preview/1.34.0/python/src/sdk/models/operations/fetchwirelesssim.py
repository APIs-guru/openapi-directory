from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WIRELESS_SIM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchWirelessSimPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWirelessSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWirelessSimRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWirelessSimPathParams = field(default=None)
    security: FetchWirelessSimSecurity = field(default=None)
    

@dataclass
class FetchWirelessSimResponses:
    preview_wireless_sim: Optional[shared.PreviewWirelessSim] = field(default=None)
    

@dataclass
class FetchWirelessSimResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWirelessSimResponses]] = field(default=None)
    status_code: int = field(default=None)
    
