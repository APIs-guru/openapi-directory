from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SYNC_SYNC_LIST_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListSyncSyncListPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSyncSyncListQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSyncSyncListListSyncSyncListResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSyncSyncListListSyncSyncListResponse:
    lists: Optional[List[shared.PreviewSyncServiceSyncList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lists') }})
    meta: Optional[ListSyncSyncListListSyncSyncListResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListSyncSyncListRequest:
    path_params: ListSyncSyncListPathParams = field()
    query_params: ListSyncSyncListQueryParams = field()
    security: ListSyncSyncListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSyncSyncListResponse:
    content_type: str = field()
    status_code: int = field()
    list_sync_sync_list_response: Optional[ListSyncSyncListListSyncSyncListResponse] = field(default=None)
    
