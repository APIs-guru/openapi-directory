from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class ListIPAccessControlListPathParams:
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListIPAccessControlListQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListIPAccessControlListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListIPAccessControlListPathParams = field(default=None)
    query_params: ListIPAccessControlListQueryParams = field(default=None)
    security: ListIPAccessControlListSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListIPAccessControlList200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListIPAccessControlList200ApplicationJSONListIPAccessControlListResponse:
    ip_access_control_lists: Optional[List[shared.TrunkingV1TrunkIPAccessControlList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_access_control_lists' }})
    meta: Optional[ListIPAccessControlList200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListIPAccessControlListResponses:
    list_ip_access_control_list_response: Optional[ListIPAccessControlList200ApplicationJSONListIPAccessControlListResponse] = field(default=None)
    

@dataclass
class ListIPAccessControlListResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListIPAccessControlListResponses]] = field(default=None)
    status_code: int = field(default=None)
    
