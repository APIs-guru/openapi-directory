from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class UpdateRatePlanPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRatePlanUpdateRatePlanRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRatePlanRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRatePlanPathParams = field(default=None)
    request: Optional[UpdateRatePlanUpdateRatePlanRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRatePlanSecurity = field(default=None)
    

@dataclass
class UpdateRatePlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wireless_v1_rate_plan: Optional[shared.WirelessV1RatePlan] = field(default=None)
    
