from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_PHONE_NUMBER_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class FetchPhoneNumberCountryPathParams:
    iso_country: str = field(default=None, metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPhoneNumberCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPhoneNumberCountryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchPhoneNumberCountryPathParams = field(default=None)
    security: FetchPhoneNumberCountrySecurity = field(default=None)
    

@dataclass
class FetchPhoneNumberCountryResponses:
    pricing_v1_phone_number_phone_number_country_instance: Optional[shared.PricingV1PhoneNumberPhoneNumberCountryInstance] = field(default=None)
    

@dataclass
class FetchPhoneNumberCountryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchPhoneNumberCountryResponses]] = field(default=None)
    status_code: int = field(default=None)
    
