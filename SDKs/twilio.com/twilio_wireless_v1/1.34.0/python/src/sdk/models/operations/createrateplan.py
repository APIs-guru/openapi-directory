from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class CreateRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRatePlanRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateRatePlanSecurity = field(default=None)
    

@dataclass
class CreateRatePlanResponses:
    wireless_v1_rate_plan: Optional[shared.WirelessV1RatePlan] = field(default=None)
    

@dataclass
class CreateRatePlanResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateRatePlanResponses]] = field(default=None)
    status_code: int = field(default=None)
    
