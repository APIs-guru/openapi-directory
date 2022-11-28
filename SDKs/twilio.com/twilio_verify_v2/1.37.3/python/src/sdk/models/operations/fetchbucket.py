from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_BUCKET_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchBucketPathParams:
    rate_limit_sid: str = field(metadata={'path_param': { 'field_name': 'RateLimitSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBucketSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBucketRequest:
    path_params: FetchBucketPathParams = field()
    security: FetchBucketSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchBucketResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_rate_limit_bucket: Optional[shared.VerifyV2ServiceRateLimitBucket] = field(default=None)
    
