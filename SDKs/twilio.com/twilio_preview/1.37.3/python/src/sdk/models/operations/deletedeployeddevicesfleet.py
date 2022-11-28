from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteDeployedDevicesFleetPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDeployedDevicesFleetRequest:
    path_params: DeleteDeployedDevicesFleetPathParams = field()
    security: DeleteDeployedDevicesFleetSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteDeployedDevicesFleetResponse:
    content_type: str = field()
    status_code: int = field()
    
