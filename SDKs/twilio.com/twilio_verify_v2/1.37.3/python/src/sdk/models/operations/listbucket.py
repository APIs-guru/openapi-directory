from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_BUCKET_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListBucketPathParams:
    rate_limit_sid: str = field(metadata={'path_param': { 'field_name': 'RateLimitSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBucketQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBucketSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListBucketListBucketResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListBucketListBucketResponse:
    buckets: Optional[List[shared.VerifyV2ServiceRateLimitBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buckets') }})
    meta: Optional[ListBucketListBucketResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListBucketRequest:
    path_params: ListBucketPathParams = field()
    query_params: ListBucketQueryParams = field()
    security: ListBucketSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListBucketResponse:
    content_type: str = field()
    status_code: int = field()
    list_bucket_response: Optional[ListBucketListBucketResponse] = field(default=None)
    
