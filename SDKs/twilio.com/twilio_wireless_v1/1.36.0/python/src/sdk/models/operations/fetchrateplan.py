from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class FetchRatePlanPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRatePlanRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRatePlanPathParams = field(default=None)
    security: FetchRatePlanSecurity = field(default=None)
    

@dataclass
class FetchRatePlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wireless_v1_rate_plan: Optional[shared.WirelessV1RatePlan] = field(default=None)
    
