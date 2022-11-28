from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteWirelessRatePlanPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWirelessRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWirelessRatePlanRequest:
    path_params: DeleteWirelessRatePlanPathParams = field()
    security: DeleteWirelessRatePlanSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteWirelessRatePlanResponse:
    content_type: str = field()
    status_code: int = field()
    
