from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateDeployedDevicesCertificatePathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeployedDevicesCertificateRequestBodyUpdateDeployedDevicesCertificateRequest:
    device_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DeviceSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeployedDevicesCertificateRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDeployedDevicesCertificatePathParams = field(default=None)
    request: Optional[UpdateDeployedDevicesCertificateRequestBodyUpdateDeployedDevicesCertificateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDeployedDevicesCertificateSecurity = field(default=None)
    

@dataclass
class UpdateDeployedDevicesCertificateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_deployed_devices_fleet_certificate: Optional[shared.PreviewDeployedDevicesFleetCertificate] = field(default=None)
    
