from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_BUCKET_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateBucketPathParams:
    rate_limit_sid: str = field(metadata={'path_param': { 'field_name': 'RateLimitSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBucketCreateBucketRequest:
    interval: int = field(metadata={'form': { 'field_name': 'Interval' }})
    max: int = field(metadata={'form': { 'field_name': 'Max' }})
    

@dataclass
class CreateBucketSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBucketRequest:
    path_params: CreateBucketPathParams = field()
    security: CreateBucketSecurity = field()
    request: Optional[CreateBucketCreateBucketRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateBucketResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_rate_limit_bucket: Optional[shared.VerifyV2ServiceRateLimitBucket] = field(default=None)
    
