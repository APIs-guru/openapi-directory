from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteDeployedDevicesDeploymentPathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDeployedDevicesDeploymentRequest:
    path_params: DeleteDeployedDevicesDeploymentPathParams = field()
    security: DeleteDeployedDevicesDeploymentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteDeployedDevicesDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    
