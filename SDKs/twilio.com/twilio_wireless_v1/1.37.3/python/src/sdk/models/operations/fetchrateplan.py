from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class FetchRatePlanPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRatePlanRequest:
    path_params: FetchRatePlanPathParams = field()
    security: FetchRatePlanSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRatePlanResponse:
    content_type: str = field()
    status_code: int = field()
    wireless_v1_rate_plan: Optional[shared.WirelessV1RatePlan] = field(default=None)
    
