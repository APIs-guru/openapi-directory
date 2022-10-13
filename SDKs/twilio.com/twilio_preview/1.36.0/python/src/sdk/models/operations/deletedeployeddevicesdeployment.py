from dataclasses import dataclass, field
from typing import Optional
DELETE_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteDeployedDevicesDeploymentPathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDeployedDevicesDeploymentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteDeployedDevicesDeploymentPathParams = field(default=None)
    security: DeleteDeployedDevicesDeploymentSecurity = field(default=None)
    

@dataclass
class DeleteDeployedDevicesDeploymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
