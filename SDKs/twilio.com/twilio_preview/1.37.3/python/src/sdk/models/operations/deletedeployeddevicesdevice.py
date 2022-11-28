from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_DEPLOYED_DEVICES_DEVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteDeployedDevicesDevicePathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeployedDevicesDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDeployedDevicesDeviceRequest:
    path_params: DeleteDeployedDevicesDevicePathParams = field()
    security: DeleteDeployedDevicesDeviceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteDeployedDevicesDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    
