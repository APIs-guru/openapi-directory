from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_PHONE_NUMBER_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class FetchPhoneNumberCountryPathParams:
    iso_country: str = field(metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPhoneNumberCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPhoneNumberCountryRequest:
    path_params: FetchPhoneNumberCountryPathParams = field()
    security: FetchPhoneNumberCountrySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchPhoneNumberCountryResponse:
    content_type: str = field()
    status_code: int = field()
    pricing_v1_phone_number_phone_number_country_instance: Optional[shared.PricingV1PhoneNumberPhoneNumberCountryInstance] = field(default=None)
    
