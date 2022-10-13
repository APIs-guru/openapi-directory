from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DEPLOYED_DEVICES_DEVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListDeployedDevicesDevicePathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDeployedDevicesDeviceQueryParams:
    deployment_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DeploymentSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeployedDevicesDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDeployedDevicesDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListDeployedDevicesDevicePathParams = field(default=None)
    query_params: ListDeployedDevicesDeviceQueryParams = field(default=None)
    security: ListDeployedDevicesDeviceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDeployedDevicesDevice200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesDevice200ApplicationJSONListDeployedDevicesDeviceResponse:
    devices: Optional[List[shared.PreviewDeployedDevicesFleetDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    meta: Optional[ListDeployedDevicesDevice200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDeployedDevicesDeviceResponse:
    content_type: str = field(default=None)
    list_deployed_devices_device_response: Optional[ListDeployedDevicesDevice200ApplicationJSONListDeployedDevicesDeviceResponse] = field(default=None)
    status_code: int = field(default=None)
    
