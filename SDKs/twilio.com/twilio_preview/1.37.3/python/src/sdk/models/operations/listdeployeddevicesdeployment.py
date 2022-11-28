from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListDeployedDevicesDeploymentPathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDeployedDevicesDeploymentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse:
    deployments: Optional[List[shared.PreviewDeployedDevicesFleetDeployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    meta: Optional[ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListDeployedDevicesDeploymentRequest:
    path_params: ListDeployedDevicesDeploymentPathParams = field()
    query_params: ListDeployedDevicesDeploymentQueryParams = field()
    security: ListDeployedDevicesDeploymentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListDeployedDevicesDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    list_deployed_devices_deployment_response: Optional[ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse] = field(default=None)
    
