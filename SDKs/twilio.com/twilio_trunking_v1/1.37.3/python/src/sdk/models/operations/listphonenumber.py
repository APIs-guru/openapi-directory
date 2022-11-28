from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_PHONE_NUMBER_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class ListPhoneNumberPathParams:
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListPhoneNumberQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListPhoneNumberListPhoneNumberResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListPhoneNumberListPhoneNumberResponse:
    meta: Optional[ListPhoneNumberListPhoneNumberResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    phone_numbers: Optional[List[shared.TrunkingV1TrunkPhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    

@dataclass
class ListPhoneNumberRequest:
    path_params: ListPhoneNumberPathParams = field()
    query_params: ListPhoneNumberQueryParams = field()
    security: ListPhoneNumberSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListPhoneNumberResponse:
    content_type: str = field()
    status_code: int = field()
    list_phone_number_response: Optional[ListPhoneNumberListPhoneNumberResponse] = field(default=None)
    
