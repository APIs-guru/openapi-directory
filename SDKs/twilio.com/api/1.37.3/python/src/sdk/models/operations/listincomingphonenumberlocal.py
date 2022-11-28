from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_INCOMING_PHONE_NUMBER_LOCAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListIncomingPhoneNumberLocalPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListIncomingPhoneNumberLocalQueryParams:
    beta: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Beta', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    origin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Origin', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIncomingPhoneNumberLocalSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    incoming_phone_numbers: Optional[List[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incoming_phone_numbers') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListIncomingPhoneNumberLocalRequest:
    path_params: ListIncomingPhoneNumberLocalPathParams = field()
    query_params: ListIncomingPhoneNumberLocalQueryParams = field()
    security: ListIncomingPhoneNumberLocalSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListIncomingPhoneNumberLocalResponse:
    content_type: str = field()
    status_code: int = field()
    list_incoming_phone_number_local_response: Optional[ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse] = field(default=None)
    
