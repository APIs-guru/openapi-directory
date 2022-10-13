from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WIRELESS_SIM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateWirelessSimPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWirelessSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWirelessSimRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWirelessSimPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWirelessSimSecurity = field(default=None)
    

@dataclass
class UpdateWirelessSimResponses:
    preview_wireless_sim: Optional[shared.PreviewWirelessSim] = field(default=None)
    

@dataclass
class UpdateWirelessSimResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateWirelessSimResponses]] = field(default=None)
    status_code: int = field(default=None)
    
