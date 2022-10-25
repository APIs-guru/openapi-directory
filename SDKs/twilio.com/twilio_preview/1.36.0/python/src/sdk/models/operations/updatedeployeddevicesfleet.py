from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateDeployedDevicesFleetPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest:
    default_deployment_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultDeploymentSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeployedDevicesFleetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDeployedDevicesFleetPathParams = field(default=None)
    request: Optional[UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDeployedDevicesFleetSecurity = field(default=None)
    

@dataclass
class UpdateDeployedDevicesFleetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_deployed_devices_fleet: Optional[shared.PreviewDeployedDevicesFleet] = field(default=None)
    
