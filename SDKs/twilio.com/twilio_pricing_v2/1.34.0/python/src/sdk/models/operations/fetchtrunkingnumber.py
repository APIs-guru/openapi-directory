from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TRUNKING_NUMBER_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclass
class FetchTrunkingNumberPathParams:
    destination_number: str = field(default=None, metadata={'path_param': { 'field_name': 'DestinationNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrunkingNumberQueryParams:
    origination_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OriginationNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchTrunkingNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrunkingNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTrunkingNumberPathParams = field(default=None)
    query_params: FetchTrunkingNumberQueryParams = field(default=None)
    security: FetchTrunkingNumberSecurity = field(default=None)
    

@dataclass
class FetchTrunkingNumberResponses:
    pricing_v2_trunking_number: Optional[shared.PricingV2TrunkingNumber] = field(default=None)
    

@dataclass
class FetchTrunkingNumberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTrunkingNumberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
