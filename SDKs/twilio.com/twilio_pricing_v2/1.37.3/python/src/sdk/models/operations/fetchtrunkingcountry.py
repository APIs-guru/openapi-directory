from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TRUNKING_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class FetchTrunkingCountryPathParams:
    iso_country: str = field(metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrunkingCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrunkingCountryRequest:
    path_params: FetchTrunkingCountryPathParams = field()
    security: FetchTrunkingCountrySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTrunkingCountryResponse:
    content_type: str = field()
    status_code: int = field()
    pricing_v2_trunking_country_instance: Optional[shared.PricingV2TrunkingCountryInstance] = field(default=None)
    
