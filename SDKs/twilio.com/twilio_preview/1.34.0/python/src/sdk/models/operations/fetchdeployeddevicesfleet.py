from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchDeployedDevicesFleetPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeployedDevicesFleetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDeployedDevicesFleetPathParams = field(default=None)
    security: FetchDeployedDevicesFleetSecurity = field(default=None)
    

@dataclass
class FetchDeployedDevicesFleetResponses:
    preview_deployed_devices_fleet: Optional[shared.PreviewDeployedDevicesFleet] = field(default=None)
    

@dataclass
class FetchDeployedDevicesFleetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchDeployedDevicesFleetResponses]] = field(default=None)
    status_code: int = field(default=None)
    
