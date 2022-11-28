from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_VOICE_NUMBER_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class FetchVoiceNumberPathParams:
    number: str = field(metadata={'path_param': { 'field_name': 'Number', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchVoiceNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVoiceNumberRequest:
    path_params: FetchVoiceNumberPathParams = field()
    security: FetchVoiceNumberSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchVoiceNumberResponse:
    content_type: str = field()
    status_code: int = field()
    pricing_v1_voice_voice_number: Optional[shared.PricingV1VoiceVoiceNumber] = field(default=None)
    
