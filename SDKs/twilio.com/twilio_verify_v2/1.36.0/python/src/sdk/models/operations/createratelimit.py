from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateRateLimitPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRateLimitCreateRateLimitRequest:
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    unique_name: str = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateRateLimitSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRateLimitRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateRateLimitPathParams = field(default=None)
    request: Optional[CreateRateLimitCreateRateLimitRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateRateLimitSecurity = field(default=None)
    

@dataclass
class CreateRateLimitResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_rate_limit: Optional[shared.VerifyV2ServiceRateLimit] = field(default=None)
    
