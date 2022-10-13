from dataclasses import dataclass, field
from typing import Optional
DELETE_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class DeleteRatePlanPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRatePlanRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteRatePlanPathParams = field(default=None)
    security: DeleteRatePlanSecurity = field(default=None)
    

@dataclass
class DeleteRatePlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
