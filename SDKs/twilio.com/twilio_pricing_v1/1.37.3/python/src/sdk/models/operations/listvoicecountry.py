from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_VOICE_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class ListVoiceCountryQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVoiceCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListVoiceCountryListVoiceCountryResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListVoiceCountryListVoiceCountryResponse:
    countries: Optional[List[shared.PricingV1VoiceVoiceCountry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    meta: Optional[ListVoiceCountryListVoiceCountryResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListVoiceCountryRequest:
    query_params: ListVoiceCountryQueryParams = field()
    security: ListVoiceCountrySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListVoiceCountryResponse:
    content_type: str = field()
    status_code: int = field()
    list_voice_country_response: Optional[ListVoiceCountryListVoiceCountryResponse] = field(default=None)
    
