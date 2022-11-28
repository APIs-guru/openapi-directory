from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WIRELESS_SIM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchWirelessSimPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWirelessSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWirelessSimRequest:
    path_params: FetchWirelessSimPathParams = field()
    security: FetchWirelessSimSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWirelessSimResponse:
    content_type: str = field()
    status_code: int = field()
    preview_wireless_sim: Optional[shared.PreviewWirelessSim] = field(default=None)
    
