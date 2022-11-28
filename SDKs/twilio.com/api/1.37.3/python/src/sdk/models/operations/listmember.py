from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MEMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListMemberPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    queue_sid: str = field(metadata={'path_param': { 'field_name': 'QueueSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMemberQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMemberListMemberResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    queue_members: Optional[List[shared.APIV2010AccountQueueMember]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queue_members') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListMemberRequest:
    path_params: ListMemberPathParams = field()
    query_params: ListMemberQueryParams = field()
    security: ListMemberSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMemberResponse:
    content_type: str = field()
    status_code: int = field()
    list_member_response: Optional[ListMemberListMemberResponse] = field(default=None)
    
