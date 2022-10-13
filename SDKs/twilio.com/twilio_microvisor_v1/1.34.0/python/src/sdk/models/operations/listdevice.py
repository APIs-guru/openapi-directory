from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DEVICE_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclass
class ListDeviceQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDeviceRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListDeviceQueryParams = field(default=None)
    security: ListDeviceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDevice200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDevice200ApplicationJSONListDeviceResponse:
    devices: Optional[List[shared.MicrovisorV1Device]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    meta: Optional[ListDevice200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDeviceResponses:
    list_device_response: Optional[ListDevice200ApplicationJSONListDeviceResponse] = field(default=None)
    

@dataclass
class ListDeviceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListDeviceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
