from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_INCOMING_PHONE_NUMBER_TOLL_FREE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListIncomingPhoneNumberTollFreePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListIncomingPhoneNumberTollFreeQueryParams:
    beta: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Beta', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    origin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Origin', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIncomingPhoneNumberTollFreeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    incoming_phone_numbers: Optional[List[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incoming_phone_numbers') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListIncomingPhoneNumberTollFreeRequest:
    path_params: ListIncomingPhoneNumberTollFreePathParams = field()
    query_params: ListIncomingPhoneNumberTollFreeQueryParams = field()
    security: ListIncomingPhoneNumberTollFreeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListIncomingPhoneNumberTollFreeResponse:
    content_type: str = field()
    status_code: int = field()
    list_incoming_phone_number_toll_free_response: Optional[ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse] = field(default=None)
    
