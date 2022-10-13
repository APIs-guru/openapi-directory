from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchDeployedDevicesDeploymentPathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeployedDevicesDeploymentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDeployedDevicesDeploymentPathParams = field(default=None)
    security: FetchDeployedDevicesDeploymentSecurity = field(default=None)
    

@dataclass
class FetchDeployedDevicesDeploymentResponses:
    preview_deployed_devices_fleet_deployment: Optional[shared.PreviewDeployedDevicesFleetDeployment] = field(default=None)
    

@dataclass
class FetchDeployedDevicesDeploymentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchDeployedDevicesDeploymentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
