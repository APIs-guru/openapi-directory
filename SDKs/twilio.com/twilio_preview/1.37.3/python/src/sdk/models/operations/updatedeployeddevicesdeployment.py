from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateDeployedDevicesDeploymentPathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    sync_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SyncServiceSid' }})
    

@dataclass
class UpdateDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeployedDevicesDeploymentRequest:
    path_params: UpdateDeployedDevicesDeploymentPathParams = field()
    security: UpdateDeployedDevicesDeploymentSecurity = field()
    request: Optional[UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateDeployedDevicesDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    preview_deployed_devices_fleet_deployment: Optional[shared.PreviewDeployedDevicesFleetDeployment] = field(default=None)
    
