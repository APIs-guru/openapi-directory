from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_MESSAGING_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class FetchMessagingCountryPathParams:
    iso_country: str = field(metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMessagingCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMessagingCountryRequest:
    path_params: FetchMessagingCountryPathParams = field()
    security: FetchMessagingCountrySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchMessagingCountryResponse:
    content_type: str = field()
    status_code: int = field()
    pricing_v1_messaging_messaging_country_instance: Optional[shared.PricingV1MessagingMessagingCountryInstance] = field(default=None)
    
