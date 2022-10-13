from dataclasses import dataclass, field
from typing import Optional
DELETE_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteRateLimitPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRateLimitSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRateLimitRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteRateLimitPathParams = field(default=None)
    security: DeleteRateLimitSecurity = field(default=None)
    

@dataclass
class DeleteRateLimitResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
