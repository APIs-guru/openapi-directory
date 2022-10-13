from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_AVAILABLE_PHONE_NUMBER_COUNTRY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchAvailablePhoneNumberCountryPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    country_code: str = field(default=None, metadata={'path_param': { 'field_name': 'CountryCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAvailablePhoneNumberCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAvailablePhoneNumberCountryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchAvailablePhoneNumberCountryPathParams = field(default=None)
    security: FetchAvailablePhoneNumberCountrySecurity = field(default=None)
    

@dataclass
class FetchAvailablePhoneNumberCountryResponses:
    api_v2010_account_available_phone_number_country: Optional[shared.APIV2010AccountAvailablePhoneNumberCountry] = field(default=None)
    

@dataclass
class FetchAvailablePhoneNumberCountryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchAvailablePhoneNumberCountryResponses]] = field(default=None)
    status_code: int = field(default=None)
    
