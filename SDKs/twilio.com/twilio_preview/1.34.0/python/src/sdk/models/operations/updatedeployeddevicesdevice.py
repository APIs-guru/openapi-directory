from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_DEPLOYED_DEVICES_DEVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateDeployedDevicesDevicePathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeployedDevicesDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeployedDevicesDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDeployedDevicesDevicePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDeployedDevicesDeviceSecurity = field(default=None)
    

@dataclass
class UpdateDeployedDevicesDeviceResponses:
    preview_deployed_devices_fleet_device: Optional[shared.PreviewDeployedDevicesFleetDevice] = field(default=None)
    

@dataclass
class UpdateDeployedDevicesDeviceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateDeployedDevicesDeviceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
