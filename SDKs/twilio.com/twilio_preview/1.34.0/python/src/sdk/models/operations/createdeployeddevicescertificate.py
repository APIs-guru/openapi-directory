from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateDeployedDevicesCertificatePathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDeployedDevicesCertificateRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateDeployedDevicesCertificatePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDeployedDevicesCertificateSecurity = field(default=None)
    

@dataclass
class CreateDeployedDevicesCertificateResponses:
    preview_deployed_devices_fleet_certificate: Optional[shared.PreviewDeployedDevicesFleetCertificate] = field(default=None)
    

@dataclass
class CreateDeployedDevicesCertificateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateDeployedDevicesCertificateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
