from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_INCOMING_PHONE_NUMBER_MOBILE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListIncomingPhoneNumberMobilePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListIncomingPhoneNumberMobileQueryParams:
    beta: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Beta', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    origin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Origin', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIncomingPhoneNumberMobileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListIncomingPhoneNumberMobileRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListIncomingPhoneNumberMobilePathParams = field(default=None)
    query_params: ListIncomingPhoneNumberMobileQueryParams = field(default=None)
    security: ListIncomingPhoneNumberMobileSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListIncomingPhoneNumberMobile200ApplicationJSONListIncomingPhoneNumberMobileResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    incoming_phone_numbers: Optional[List[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incoming_phone_numbers' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListIncomingPhoneNumberMobileResponses:
    list_incoming_phone_number_mobile_response: Optional[ListIncomingPhoneNumberMobile200ApplicationJSONListIncomingPhoneNumberMobileResponse] = field(default=None)
    

@dataclass
class ListIncomingPhoneNumberMobileResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListIncomingPhoneNumberMobileResponses]] = field(default=None)
    status_code: int = field(default=None)
    
