from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListDeployedDevicesFleetQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDeployedDevicesFleetRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListDeployedDevicesFleetQueryParams = field(default=None)
    security: ListDeployedDevicesFleetSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDeployedDevicesFleet200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesFleet200ApplicationJSONListDeployedDevicesFleetResponse:
    fleets: Optional[List[shared.PreviewDeployedDevicesFleet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleets' }})
    meta: Optional[ListDeployedDevicesFleet200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDeployedDevicesFleetResponse:
    content_type: str = field(default=None)
    list_deployed_devices_fleet_response: Optional[ListDeployedDevicesFleet200ApplicationJSONListDeployedDevicesFleetResponse] = field(default=None)
    status_code: int = field(default=None)
    
