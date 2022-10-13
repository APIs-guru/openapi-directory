from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_DEPLOYED_DEVICES_DEVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateDeployedDevicesDevicePathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeployedDevicesDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDeployedDevicesDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateDeployedDevicesDevicePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDeployedDevicesDeviceSecurity = field(default=None)
    

@dataclass
class CreateDeployedDevicesDeviceResponses:
    preview_deployed_devices_fleet_device: Optional[shared.PreviewDeployedDevicesFleetDevice] = field(default=None)
    

@dataclass
class CreateDeployedDevicesDeviceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateDeployedDevicesDeviceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
