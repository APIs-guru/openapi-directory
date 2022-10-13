from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_VOICE_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class FetchVoiceCountryPathParams:
    iso_country: str = field(default=None, metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchVoiceCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVoiceCountryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchVoiceCountryPathParams = field(default=None)
    security: FetchVoiceCountrySecurity = field(default=None)
    

@dataclass
class FetchVoiceCountryResponses:
    pricing_v2_voice_voice_country_instance: Optional[shared.PricingV2VoiceVoiceCountryInstance] = field(default=None)
    

@dataclass
class FetchVoiceCountryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchVoiceCountryResponses]] = field(default=None)
    status_code: int = field(default=None)
    
