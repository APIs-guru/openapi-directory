from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDeployedDevicesFleetRequest:
    security: CreateDeployedDevicesFleetSecurity = field()
    request: Optional[CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateDeployedDevicesFleetResponse:
    content_type: str = field()
    status_code: int = field()
    preview_deployed_devices_fleet: Optional[shared.PreviewDeployedDevicesFleet] = field(default=None)
    
