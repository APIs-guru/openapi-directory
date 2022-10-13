from dataclasses import dataclass, field
from typing import Optional
DELETE_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteDeployedDevicesKeyPathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeployedDevicesKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDeployedDevicesKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteDeployedDevicesKeyPathParams = field(default=None)
    security: DeleteDeployedDevicesKeySecurity = field(default=None)
    

@dataclass
class DeleteDeployedDevicesKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
