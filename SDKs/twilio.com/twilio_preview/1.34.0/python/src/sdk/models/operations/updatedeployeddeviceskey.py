from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateDeployedDevicesKeyPathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeployedDevicesKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeployedDevicesKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDeployedDevicesKeyPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDeployedDevicesKeySecurity = field(default=None)
    

@dataclass
class UpdateDeployedDevicesKeyResponses:
    preview_deployed_devices_fleet_key: Optional[shared.PreviewDeployedDevicesFleetKey] = field(default=None)
    

@dataclass
class UpdateDeployedDevicesKeyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateDeployedDevicesKeyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
