from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListRateLimitPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRateLimitQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRateLimitSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListRateLimitListRateLimitResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListRateLimitListRateLimitResponse:
    meta: Optional[ListRateLimitListRateLimitResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    rate_limits: Optional[List[shared.VerifyV2ServiceRateLimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_limits') }})
    

@dataclass
class ListRateLimitRequest:
    path_params: ListRateLimitPathParams = field()
    query_params: ListRateLimitQueryParams = field()
    security: ListRateLimitSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListRateLimitResponse:
    content_type: str = field()
    status_code: int = field()
    list_rate_limit_response: Optional[ListRateLimitListRateLimitResponse] = field(default=None)
    
