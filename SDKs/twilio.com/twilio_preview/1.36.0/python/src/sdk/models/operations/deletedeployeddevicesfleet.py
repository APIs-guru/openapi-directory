from dataclasses import dataclass, field
from typing import Optional
DELETE_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteDeployedDevicesFleetPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDeployedDevicesFleetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteDeployedDevicesFleetPathParams = field(default=None)
    security: DeleteDeployedDevicesFleetSecurity = field(default=None)
    

@dataclass
class DeleteDeployedDevicesFleetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
