from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SIP_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListSipIPAccessControlListPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSipIPAccessControlListQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSipIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSipIPAccessControlListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSipIPAccessControlListPathParams = field(default=None)
    query_params: ListSipIPAccessControlListQueryParams = field(default=None)
    security: ListSipIPAccessControlListSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSipIPAccessControlList200ApplicationJSONListSipIPAccessControlListResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    ip_access_control_lists: Optional[List[shared.APIV2010AccountSipSipIPAccessControlList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_access_control_lists' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListSipIPAccessControlListResponse:
    content_type: str = field(default=None)
    list_sip_ip_access_control_list_response: Optional[ListSipIPAccessControlList200ApplicationJSONListSipIPAccessControlListResponse] = field(default=None)
    status_code: int = field(default=None)
    
