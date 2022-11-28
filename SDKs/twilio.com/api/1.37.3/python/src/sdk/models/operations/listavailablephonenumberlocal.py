from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_AVAILABLE_PHONE_NUMBER_LOCAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListAvailablePhoneNumberLocalPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    country_code: str = field(metadata={'path_param': { 'field_name': 'CountryCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAvailablePhoneNumberLocalQueryParams:
    area_code: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'AreaCode', 'style': 'form', 'explode': True }})
    beta: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Beta', 'style': 'form', 'explode': True }})
    contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Contains', 'style': 'form', 'explode': True }})
    distance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Distance', 'style': 'form', 'explode': True }})
    exclude_all_address_required: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ExcludeAllAddressRequired', 'style': 'form', 'explode': True }})
    exclude_foreign_address_required: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ExcludeForeignAddressRequired', 'style': 'form', 'explode': True }})
    exclude_local_address_required: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ExcludeLocalAddressRequired', 'style': 'form', 'explode': True }})
    fax_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'FaxEnabled', 'style': 'form', 'explode': True }})
    in_lata: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InLata', 'style': 'form', 'explode': True }})
    in_locality: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InLocality', 'style': 'form', 'explode': True }})
    in_postal_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InPostalCode', 'style': 'form', 'explode': True }})
    in_rate_center: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InRateCenter', 'style': 'form', 'explode': True }})
    in_region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InRegion', 'style': 'form', 'explode': True }})
    mms_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'MmsEnabled', 'style': 'form', 'explode': True }})
    near_lat_long: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NearLatLong', 'style': 'form', 'explode': True }})
    near_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NearNumber', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sms_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'SmsEnabled', 'style': 'form', 'explode': True }})
    voice_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'VoiceEnabled', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAvailablePhoneNumberLocalSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse:
    available_phone_numbers: Optional[List[shared.APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_phone_numbers') }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListAvailablePhoneNumberLocalRequest:
    path_params: ListAvailablePhoneNumberLocalPathParams = field()
    query_params: ListAvailablePhoneNumberLocalQueryParams = field()
    security: ListAvailablePhoneNumberLocalSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListAvailablePhoneNumberLocalResponse:
    content_type: str = field()
    status_code: int = field()
    list_available_phone_number_local_response: Optional[ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse] = field(default=None)
    
