from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_BUCKET_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateBucketPathParams:
    rate_limit_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RateLimitSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBucketUpdateBucketRequest:
    interval: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Interval' }})
    max: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Max' }})
    

@dataclass
class UpdateBucketSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateBucketRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateBucketPathParams = field(default=None)
    request: Optional[UpdateBucketUpdateBucketRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateBucketSecurity = field(default=None)
    

@dataclass
class UpdateBucketResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_rate_limit_bucket: Optional[shared.VerifyV2ServiceRateLimitBucket] = field(default=None)
    
