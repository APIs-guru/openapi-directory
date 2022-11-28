from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_METRIC_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListMetricPathParams:
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMetricQueryParams:
    direction: Optional[shared.MetricEnumStreamDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    edge: Optional[shared.MetricEnumTwilioEdgeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Edge', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMetricSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMetricListMetricResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListMetricListMetricResponse:
    meta: Optional[ListMetricListMetricResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    metrics: Optional[List[shared.InsightsV1CallMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    

@dataclass
class ListMetricRequest:
    path_params: ListMetricPathParams = field()
    query_params: ListMetricQueryParams = field()
    security: ListMetricSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMetricResponse:
    content_type: str = field()
    status_code: int = field()
    list_metric_response: Optional[ListMetricListMetricResponse] = field(default=None)
    
