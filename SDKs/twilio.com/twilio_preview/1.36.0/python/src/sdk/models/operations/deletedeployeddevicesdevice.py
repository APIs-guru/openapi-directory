from dataclasses import dataclass, field
from typing import Optional
DELETE_DEPLOYED_DEVICES_DEVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteDeployedDevicesDevicePathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeployedDevicesDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDeployedDevicesDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteDeployedDevicesDevicePathParams = field(default=None)
    security: DeleteDeployedDevicesDeviceSecurity = field(default=None)
    

@dataclass
class DeleteDeployedDevicesDeviceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
