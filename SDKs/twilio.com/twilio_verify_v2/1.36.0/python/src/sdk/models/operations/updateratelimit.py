from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateRateLimitPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRateLimitUpdateRateLimitRequest:
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    

@dataclass
class UpdateRateLimitSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRateLimitRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRateLimitPathParams = field(default=None)
    request: Optional[UpdateRateLimitUpdateRateLimitRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRateLimitSecurity = field(default=None)
    

@dataclass
class UpdateRateLimitResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_rate_limit: Optional[shared.VerifyV2ServiceRateLimit] = field(default=None)
    
