from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_INCOMING_PHONE_NUMBER_TOLL_FREE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListIncomingPhoneNumberTollFreePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListIncomingPhoneNumberTollFreeQueryParams:
    beta: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Beta', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    origin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Origin', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIncomingPhoneNumberTollFreeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListIncomingPhoneNumberTollFreeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListIncomingPhoneNumberTollFreePathParams = field(default=None)
    query_params: ListIncomingPhoneNumberTollFreeQueryParams = field(default=None)
    security: ListIncomingPhoneNumberTollFreeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListIncomingPhoneNumberTollFree200ApplicationJSONListIncomingPhoneNumberTollFreeResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    incoming_phone_numbers: Optional[List[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incoming_phone_numbers' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListIncomingPhoneNumberTollFreeResponses:
    list_incoming_phone_number_toll_free_response: Optional[ListIncomingPhoneNumberTollFree200ApplicationJSONListIncomingPhoneNumberTollFreeResponse] = field(default=None)
    

@dataclass
class ListIncomingPhoneNumberTollFreeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListIncomingPhoneNumberTollFreeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
