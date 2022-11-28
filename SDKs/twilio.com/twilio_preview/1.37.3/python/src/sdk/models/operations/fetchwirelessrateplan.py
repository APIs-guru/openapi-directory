from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchWirelessRatePlanPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWirelessRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWirelessRatePlanRequest:
    path_params: FetchWirelessRatePlanPathParams = field()
    security: FetchWirelessRatePlanSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWirelessRatePlanResponse:
    content_type: str = field()
    status_code: int = field()
    preview_wireless_rate_plan: Optional[shared.PreviewWirelessRatePlan] = field(default=None)
    
