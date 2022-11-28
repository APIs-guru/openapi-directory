from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateRateLimitPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRateLimitCreateRateLimitRequest:
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    

@dataclass
class CreateRateLimitSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRateLimitRequest:
    path_params: CreateRateLimitPathParams = field()
    security: CreateRateLimitSecurity = field()
    request: Optional[CreateRateLimitCreateRateLimitRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateRateLimitResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_rate_limit: Optional[shared.VerifyV2ServiceRateLimit] = field(default=None)
    
