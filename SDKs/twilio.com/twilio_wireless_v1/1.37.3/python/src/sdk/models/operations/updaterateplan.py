from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class UpdateRatePlanPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRatePlanUpdateRatePlanRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRatePlanRequest:
    path_params: UpdateRatePlanPathParams = field()
    security: UpdateRatePlanSecurity = field()
    request: Optional[UpdateRatePlanUpdateRatePlanRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRatePlanResponse:
    content_type: str = field()
    status_code: int = field()
    wireless_v1_rate_plan: Optional[shared.WirelessV1RatePlan] = field(default=None)
    
