from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateDeployedDevicesKeyPathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest:
    device_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DeviceSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateDeployedDevicesKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeployedDevicesKeyRequest:
    path_params: UpdateDeployedDevicesKeyPathParams = field()
    security: UpdateDeployedDevicesKeySecurity = field()
    request: Optional[UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateDeployedDevicesKeyResponse:
    content_type: str = field()
    status_code: int = field()
    preview_deployed_devices_fleet_key: Optional[shared.PreviewDeployedDevicesFleetKey] = field(default=None)
    
