from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_AVAILABLE_PHONE_NUMBER_COUNTRY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListAvailablePhoneNumberCountryPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAvailablePhoneNumberCountryQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAvailablePhoneNumberCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListAvailablePhoneNumberCountryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListAvailablePhoneNumberCountryPathParams = field(default=None)
    query_params: ListAvailablePhoneNumberCountryQueryParams = field(default=None)
    security: ListAvailablePhoneNumberCountrySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListAvailablePhoneNumberCountry200ApplicationJSONListAvailablePhoneNumberCountryResponse:
    countries: Optional[List[shared.APIV2010AccountAvailablePhoneNumberCountry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListAvailablePhoneNumberCountryResponses:
    list_available_phone_number_country_response: Optional[ListAvailablePhoneNumberCountry200ApplicationJSONListAvailablePhoneNumberCountryResponse] = field(default=None)
    

@dataclass
class ListAvailablePhoneNumberCountryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListAvailablePhoneNumberCountryResponses]] = field(default=None)
    status_code: int = field(default=None)
    
