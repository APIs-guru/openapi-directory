from dataclasses import dataclass, field
from typing import Optional
DELETE_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteWirelessRatePlanPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWirelessRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWirelessRatePlanRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteWirelessRatePlanPathParams = field(default=None)
    security: DeleteWirelessRatePlanSecurity = field(default=None)
    

@dataclass
class DeleteWirelessRatePlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
