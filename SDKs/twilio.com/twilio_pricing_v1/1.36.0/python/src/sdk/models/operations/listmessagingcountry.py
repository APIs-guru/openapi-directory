from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_MESSAGING_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class ListMessagingCountryQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMessagingCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListMessagingCountryRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListMessagingCountryQueryParams = field(default=None)
    security: ListMessagingCountrySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListMessagingCountry200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListMessagingCountry200ApplicationJSONListMessagingCountryResponse:
    countries: Optional[List[shared.PricingV1MessagingMessagingCountry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    meta: Optional[ListMessagingCountry200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListMessagingCountryResponse:
    content_type: str = field(default=None)
    list_messaging_country_response: Optional[ListMessagingCountry200ApplicationJSONListMessagingCountryResponse] = field(default=None)
    status_code: int = field(default=None)
    
