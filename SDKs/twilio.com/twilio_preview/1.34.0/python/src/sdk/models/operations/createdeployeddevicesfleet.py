from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDeployedDevicesFleetRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDeployedDevicesFleetSecurity = field(default=None)
    

@dataclass
class CreateDeployedDevicesFleetResponses:
    preview_deployed_devices_fleet: Optional[shared.PreviewDeployedDevicesFleet] = field(default=None)
    

@dataclass
class CreateDeployedDevicesFleetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateDeployedDevicesFleetResponses]] = field(default=None)
    status_code: int = field(default=None)
    
