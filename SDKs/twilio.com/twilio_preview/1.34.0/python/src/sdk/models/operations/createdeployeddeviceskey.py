from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateDeployedDevicesKeyPathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeployedDevicesKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDeployedDevicesKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateDeployedDevicesKeyPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDeployedDevicesKeySecurity = field(default=None)
    

@dataclass
class CreateDeployedDevicesKeyResponses:
    preview_deployed_devices_fleet_key: Optional[shared.PreviewDeployedDevicesFleetKey] = field(default=None)
    

@dataclass
class CreateDeployedDevicesKeyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateDeployedDevicesKeyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
