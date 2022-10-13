from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListRateLimitPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRateLimitQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRateLimitSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListRateLimitRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListRateLimitPathParams = field(default=None)
    query_params: ListRateLimitQueryParams = field(default=None)
    security: ListRateLimitSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListRateLimit200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListRateLimit200ApplicationJSONListRateLimitResponse:
    meta: Optional[ListRateLimit200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    rate_limits: Optional[List[shared.VerifyV2ServiceRateLimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate_limits' }})
    

@dataclass
class ListRateLimitResponse:
    content_type: str = field(default=None)
    list_rate_limit_response: Optional[ListRateLimit200ApplicationJSONListRateLimitResponse] = field(default=None)
    status_code: int = field(default=None)
    
