from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MESSAGING_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class FetchMessagingCountryPathParams:
    iso_country: str = field(default=None, metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMessagingCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMessagingCountryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMessagingCountryPathParams = field(default=None)
    security: FetchMessagingCountrySecurity = field(default=None)
    

@dataclass
class FetchMessagingCountryResponses:
    pricing_v1_messaging_messaging_country_instance: Optional[shared.PricingV1MessagingMessagingCountryInstance] = field(default=None)
    

@dataclass
class FetchMessagingCountryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchMessagingCountryResponses]] = field(default=None)
    status_code: int = field(default=None)
    
