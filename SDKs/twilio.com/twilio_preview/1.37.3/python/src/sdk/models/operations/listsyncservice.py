from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListSyncServiceQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSyncServiceListSyncServiceResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSyncServiceListSyncServiceResponse:
    meta: Optional[ListSyncServiceListSyncServiceResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    services: Optional[List[shared.PreviewSyncService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    

@dataclass
class ListSyncServiceRequest:
    query_params: ListSyncServiceQueryParams = field()
    security: ListSyncServiceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSyncServiceResponse:
    content_type: str = field()
    status_code: int = field()
    list_sync_service_response: Optional[ListSyncServiceListSyncServiceResponse] = field(default=None)
    
