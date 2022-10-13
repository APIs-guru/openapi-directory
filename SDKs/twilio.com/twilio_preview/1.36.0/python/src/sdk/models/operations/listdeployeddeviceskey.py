from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DEPLOYED_DEVICES_KEY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListDeployedDevicesKeyPathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDeployedDevicesKeyQueryParams:
    device_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DeviceSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeployedDevicesKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDeployedDevicesKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListDeployedDevicesKeyPathParams = field(default=None)
    query_params: ListDeployedDevicesKeyQueryParams = field(default=None)
    security: ListDeployedDevicesKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDeployedDevicesKey200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesKey200ApplicationJSONListDeployedDevicesKeyResponse:
    keys: Optional[List[shared.PreviewDeployedDevicesFleetKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    meta: Optional[ListDeployedDevicesKey200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDeployedDevicesKeyResponse:
    content_type: str = field(default=None)
    list_deployed_devices_key_response: Optional[ListDeployedDevicesKey200ApplicationJSONListDeployedDevicesKeyResponse] = field(default=None)
    status_code: int = field(default=None)
    
