from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateDeployedDevicesCertificatePathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest:
    device_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DeviceSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeployedDevicesCertificateRequest:
    path_params: UpdateDeployedDevicesCertificatePathParams = field()
    security: UpdateDeployedDevicesCertificateSecurity = field()
    request: Optional[UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateDeployedDevicesCertificateResponse:
    content_type: str = field()
    status_code: int = field()
    preview_deployed_devices_fleet_certificate: Optional[shared.PreviewDeployedDevicesFleetCertificate] = field(default=None)
    
