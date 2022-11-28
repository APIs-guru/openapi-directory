from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MESSAGING_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class ListMessagingCountryQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMessagingCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMessagingCountryListMessagingCountryResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListMessagingCountryListMessagingCountryResponse:
    countries: Optional[List[shared.PricingV1MessagingMessagingCountry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    meta: Optional[ListMessagingCountryListMessagingCountryResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListMessagingCountryRequest:
    query_params: ListMessagingCountryQueryParams = field()
    security: ListMessagingCountrySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMessagingCountryResponse:
    content_type: str = field()
    status_code: int = field()
    list_messaging_country_response: Optional[ListMessagingCountryListMessagingCountryResponse] = field(default=None)
    
