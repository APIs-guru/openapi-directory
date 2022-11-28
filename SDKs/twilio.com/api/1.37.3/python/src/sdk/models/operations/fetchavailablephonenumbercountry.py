from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_AVAILABLE_PHONE_NUMBER_COUNTRY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchAvailablePhoneNumberCountryPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    country_code: str = field(metadata={'path_param': { 'field_name': 'CountryCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAvailablePhoneNumberCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAvailablePhoneNumberCountryRequest:
    path_params: FetchAvailablePhoneNumberCountryPathParams = field()
    security: FetchAvailablePhoneNumberCountrySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchAvailablePhoneNumberCountryResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_available_phone_number_country: Optional[shared.APIV2010AccountAvailablePhoneNumberCountry] = field(default=None)
    
