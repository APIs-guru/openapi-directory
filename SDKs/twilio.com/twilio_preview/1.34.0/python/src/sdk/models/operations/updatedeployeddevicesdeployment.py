from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateDeployedDevicesDeploymentPathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeployedDevicesDeploymentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDeployedDevicesDeploymentPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDeployedDevicesDeploymentSecurity = field(default=None)
    

@dataclass
class UpdateDeployedDevicesDeploymentResponses:
    preview_deployed_devices_fleet_deployment: Optional[shared.PreviewDeployedDevicesFleetDeployment] = field(default=None)
    

@dataclass
class UpdateDeployedDevicesDeploymentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateDeployedDevicesDeploymentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
