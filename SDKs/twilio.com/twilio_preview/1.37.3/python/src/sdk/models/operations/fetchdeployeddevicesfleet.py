from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchDeployedDevicesFleetPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeployedDevicesFleetRequest:
    path_params: FetchDeployedDevicesFleetPathParams = field()
    security: FetchDeployedDevicesFleetSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchDeployedDevicesFleetResponse:
    content_type: str = field()
    status_code: int = field()
    preview_deployed_devices_fleet: Optional[shared.PreviewDeployedDevicesFleet] = field(default=None)
    
