from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_BUCKET_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateBucketPathParams:
    rate_limit_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RateLimitSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBucketSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBucketRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateBucketPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateBucketSecurity = field(default=None)
    

@dataclass
class CreateBucketResponses:
    verify_v2_service_rate_limit_bucket: Optional[shared.VerifyV2ServiceRateLimitBucket] = field(default=None)
    

@dataclass
class CreateBucketResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateBucketResponses]] = field(default=None)
    status_code: int = field(default=None)
    
