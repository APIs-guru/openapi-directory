from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_END_USER_TYPE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class ListEndUserTypeQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEndUserTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListEndUserTypeListEndUserTypeResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListEndUserTypeListEndUserTypeResponse:
    end_user_types: Optional[List[shared.TrusthubV1EndUserType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_user_types') }})
    meta: Optional[ListEndUserTypeListEndUserTypeResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListEndUserTypeRequest:
    query_params: ListEndUserTypeQueryParams = field()
    security: ListEndUserTypeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListEndUserTypeResponse:
    content_type: str = field()
    status_code: int = field()
    list_end_user_type_response: Optional[ListEndUserTypeListEndUserTypeResponse] = field(default=None)
    
