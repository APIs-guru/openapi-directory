from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_DEPLOYED_DEVICES_DEVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListDeployedDevicesDevicePathParams:
    fleet_sid: str = field(metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDeployedDevicesDeviceQueryParams:
    deployment_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DeploymentSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeployedDevicesDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse:
    devices: Optional[List[shared.PreviewDeployedDevicesFleetDevice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    meta: Optional[ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListDeployedDevicesDeviceRequest:
    path_params: ListDeployedDevicesDevicePathParams = field()
    query_params: ListDeployedDevicesDeviceQueryParams = field()
    security: ListDeployedDevicesDeviceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListDeployedDevicesDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    list_deployed_devices_device_response: Optional[ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse] = field(default=None)
    
