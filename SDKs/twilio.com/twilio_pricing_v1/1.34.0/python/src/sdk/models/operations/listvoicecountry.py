from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_VOICE_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class ListVoiceCountryQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVoiceCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListVoiceCountryRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListVoiceCountryQueryParams = field(default=None)
    security: ListVoiceCountrySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListVoiceCountry200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListVoiceCountry200ApplicationJSONListVoiceCountryResponse:
    countries: Optional[List[shared.PricingV1VoiceVoiceCountry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    meta: Optional[ListVoiceCountry200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListVoiceCountryResponses:
    list_voice_country_response: Optional[ListVoiceCountry200ApplicationJSONListVoiceCountryResponse] = field(default=None)
    

@dataclass
class ListVoiceCountryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListVoiceCountryResponses]] = field(default=None)
    status_code: int = field(default=None)
    
