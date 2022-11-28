from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateWirelessRatePlanPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWirelessRatePlanUpdateWirelessRatePlanRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateWirelessRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWirelessRatePlanRequest:
    path_params: UpdateWirelessRatePlanPathParams = field()
    security: UpdateWirelessRatePlanSecurity = field()
    request: Optional[UpdateWirelessRatePlanUpdateWirelessRatePlanRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateWirelessRatePlanResponse:
    content_type: str = field()
    status_code: int = field()
    preview_wireless_rate_plan: Optional[shared.PreviewWirelessRatePlan] = field(default=None)
    
