from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DEPLOYED_DEVICES_DEVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchDeployedDevicesDevicePathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeployedDevicesDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeployedDevicesDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDeployedDevicesDevicePathParams = field(default=None)
    security: FetchDeployedDevicesDeviceSecurity = field(default=None)
    

@dataclass
class FetchDeployedDevicesDeviceResponses:
    preview_deployed_devices_fleet_device: Optional[shared.PreviewDeployedDevicesFleetDevice] = field(default=None)
    

@dataclass
class FetchDeployedDevicesDeviceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchDeployedDevicesDeviceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
