from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DIALING_PERMISSIONS_COUNTRY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListDialingPermissionsCountryQueryParams:
    continent: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Continent', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    high_risk_special_numbers_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'HighRiskSpecialNumbersEnabled', 'style': 'form', 'explode': True }})
    high_risk_tollfraud_numbers_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'HighRiskTollfraudNumbersEnabled', 'style': 'form', 'explode': True }})
    iso_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'IsoCode', 'style': 'form', 'explode': True }})
    low_risk_numbers_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'LowRiskNumbersEnabled', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDialingPermissionsCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDialingPermissionsCountryRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListDialingPermissionsCountryQueryParams = field(default=None)
    security: ListDialingPermissionsCountrySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDialingPermissionsCountry200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDialingPermissionsCountry200ApplicationJSONListDialingPermissionsCountryResponse:
    content: Optional[List[shared.VoiceV1DialingPermissionsDialingPermissionsCountry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    meta: Optional[ListDialingPermissionsCountry200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDialingPermissionsCountryResponse:
    content_type: str = field(default=None)
    list_dialing_permissions_country_response: Optional[ListDialingPermissionsCountry200ApplicationJSONListDialingPermissionsCountryResponse] = field(default=None)
    status_code: int = field(default=None)
    
