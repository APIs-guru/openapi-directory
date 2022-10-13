from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateWirelessRatePlanPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWirelessRatePlanRequestBodyUpdateWirelessRatePlanRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateWirelessRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWirelessRatePlanRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWirelessRatePlanPathParams = field(default=None)
    request: Optional[UpdateWirelessRatePlanRequestBodyUpdateWirelessRatePlanRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWirelessRatePlanSecurity = field(default=None)
    

@dataclass
class UpdateWirelessRatePlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_wireless_rate_plan: Optional[shared.PreviewWirelessRatePlan] = field(default=None)
    
