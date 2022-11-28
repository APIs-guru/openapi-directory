from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateDeployedDevicesCertificatePathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest:
    certificate_data: str = field(metadata={'form': { 'field_name': 'CertificateData' }})
    device_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DeviceSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDeployedDevicesCertificateRequest:
    path_params: CreateDeployedDevicesCertificatePathParams = field()
    security: CreateDeployedDevicesCertificateSecurity = field()
    request: Optional[CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateDeployedDevicesCertificateResponse:
    content_type: str = field()
    status_code: int = field()
    preview_deployed_devices_fleet_certificate: Optional[shared.PreviewDeployedDevicesFleetCertificate] = field(default=None)
    
