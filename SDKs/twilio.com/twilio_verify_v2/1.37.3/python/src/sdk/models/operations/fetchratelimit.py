from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchRateLimitPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRateLimitSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRateLimitRequest:
    path_params: FetchRateLimitPathParams = field()
    security: FetchRateLimitSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRateLimitResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_rate_limit: Optional[shared.VerifyV2ServiceRateLimit] = field(default=None)
    
