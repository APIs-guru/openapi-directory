from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchDeployedDevicesKeyPathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeployedDevicesKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeployedDevicesKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDeployedDevicesKeyPathParams = field(default=None)
    security: FetchDeployedDevicesKeySecurity = field(default=None)
    

@dataclass
class FetchDeployedDevicesKeyResponses:
    preview_deployed_devices_fleet_key: Optional[shared.PreviewDeployedDevicesFleetKey] = field(default=None)
    

@dataclass
class FetchDeployedDevicesKeyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchDeployedDevicesKeyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
