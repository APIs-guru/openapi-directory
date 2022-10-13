from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_BUCKET_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListBucketPathParams:
    rate_limit_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RateLimitSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBucketQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBucketSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListBucketRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListBucketPathParams = field(default=None)
    query_params: ListBucketQueryParams = field(default=None)
    security: ListBucketSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListBucket200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListBucket200ApplicationJSONListBucketResponse:
    buckets: Optional[List[shared.VerifyV2ServiceRateLimitBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buckets' }})
    meta: Optional[ListBucket200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListBucketResponse:
    content_type: str = field(default=None)
    list_bucket_response: Optional[ListBucket200ApplicationJSONListBucketResponse] = field(default=None)
    status_code: int = field(default=None)
    
