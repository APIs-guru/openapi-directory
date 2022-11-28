from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class ListCredentialListPathParams:
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCredentialListQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListCredentialListListCredentialListResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListCredentialListListCredentialListResponse:
    credential_lists: Optional[List[shared.TrunkingV1TrunkCredentialList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential_lists') }})
    meta: Optional[ListCredentialListListCredentialListResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListCredentialListRequest:
    path_params: ListCredentialListPathParams = field()
    query_params: ListCredentialListQueryParams = field()
    security: ListCredentialListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListCredentialListResponse:
    content_type: str = field()
    status_code: int = field()
    list_credential_list_response: Optional[ListCredentialListListCredentialListResponse] = field(default=None)
    
