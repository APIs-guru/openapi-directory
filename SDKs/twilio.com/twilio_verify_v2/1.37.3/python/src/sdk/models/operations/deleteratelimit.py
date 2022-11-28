from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteRateLimitPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRateLimitSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRateLimitRequest:
    path_params: DeleteRateLimitPathParams = field()
    security: DeleteRateLimitSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteRateLimitResponse:
    content_type: str = field()
    status_code: int = field()
    
