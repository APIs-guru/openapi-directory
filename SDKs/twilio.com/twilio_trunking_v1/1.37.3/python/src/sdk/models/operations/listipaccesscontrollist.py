from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class ListIPAccessControlListPathParams:
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListIPAccessControlListQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListIPAccessControlListListIPAccessControlListResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListIPAccessControlListListIPAccessControlListResponse:
    ip_access_control_lists: Optional[List[shared.TrunkingV1TrunkIPAccessControlList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_access_control_lists') }})
    meta: Optional[ListIPAccessControlListListIPAccessControlListResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListIPAccessControlListRequest:
    path_params: ListIPAccessControlListPathParams = field()
    query_params: ListIPAccessControlListQueryParams = field()
    security: ListIPAccessControlListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListIPAccessControlListResponse:
    content_type: str = field()
    status_code: int = field()
    list_ip_access_control_list_response: Optional[ListIPAccessControlListListIPAccessControlListResponse] = field(default=None)
    
