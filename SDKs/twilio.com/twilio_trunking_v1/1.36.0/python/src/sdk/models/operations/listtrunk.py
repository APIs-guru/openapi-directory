from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class ListTrunkQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListTrunkRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListTrunkQueryParams = field(default=None)
    security: ListTrunkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListTrunk200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListTrunk200ApplicationJSONListTrunkResponse:
    meta: Optional[ListTrunk200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    trunks: Optional[List[shared.TrunkingV1Trunk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trunks' }})
    

@dataclass
class ListTrunkResponse:
    content_type: str = field(default=None)
    list_trunk_response: Optional[ListTrunk200ApplicationJSONListTrunkResponse] = field(default=None)
    status_code: int = field(default=None)
    
