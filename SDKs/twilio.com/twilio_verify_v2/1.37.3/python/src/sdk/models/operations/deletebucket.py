from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_BUCKET_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteBucketPathParams:
    rate_limit_sid: str = field(metadata={'path_param': { 'field_name': 'RateLimitSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBucketSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteBucketRequest:
    path_params: DeleteBucketPathParams = field()
    security: DeleteBucketSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteBucketResponse:
    content_type: str = field()
    status_code: int = field()
    
