from dataclasses import dataclass, field
from typing import Optional
DELETE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteDeployedDevicesCertificatePathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDeployedDevicesCertificateRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteDeployedDevicesCertificatePathParams = field(default=None)
    security: DeleteDeployedDevicesCertificateSecurity = field(default=None)
    

@dataclass
class DeleteDeployedDevicesCertificateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
