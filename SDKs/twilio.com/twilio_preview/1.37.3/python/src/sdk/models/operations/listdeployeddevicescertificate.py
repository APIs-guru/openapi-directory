from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_DEPLOYED_DEVICES_CERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListDeployedDevicesCertificatePathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDeployedDevicesCertificateQueryParams:
    device_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DeviceSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeployedDevicesCertificateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse:
    certificates: Optional[List[shared.PreviewDeployedDevicesFleetCertificate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    meta: Optional[ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListDeployedDevicesCertificateRequest:
    path_params: ListDeployedDevicesCertificatePathParams = field()
    query_params: ListDeployedDevicesCertificateQueryParams = field()
    security: ListDeployedDevicesCertificateSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListDeployedDevicesCertificateResponse:
    content_type: str = field()
    status_code: int = field()
    list_deployed_devices_certificate_response: Optional[ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse] = field(default=None)
    
