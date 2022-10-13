from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchDeployedDevicesCertificatePathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeployedDevicesCertificateRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDeployedDevicesCertificatePathParams = field(default=None)
    security: FetchDeployedDevicesCertificateSecurity = field(default=None)
    

@dataclass
class FetchDeployedDevicesCertificateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_deployed_devices_fleet_certificate: Optional[shared.PreviewDeployedDevicesFleetCertificate] = field(default=None)
    
