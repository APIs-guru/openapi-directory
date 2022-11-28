from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchDeployedDevicesDeploymentPathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeployedDevicesDeploymentRequest:
    path_params: FetchDeployedDevicesDeploymentPathParams = field()
    security: FetchDeployedDevicesDeploymentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchDeployedDevicesDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    preview_deployed_devices_fleet_deployment: Optional[shared.PreviewDeployedDevicesFleetDeployment] = field(default=None)
    
