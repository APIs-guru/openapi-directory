from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_METRIC_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListMetricPathParams:
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMetricQueryParams:
    direction: Optional[shared.MetricEnumStreamDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    edge: Optional[shared.MetricEnumTwilioEdgeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Edge', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMetricSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListMetricRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListMetricPathParams = field(default=None)
    query_params: ListMetricQueryParams = field(default=None)
    security: ListMetricSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListMetric200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListMetric200ApplicationJSONListMetricResponse:
    meta: Optional[ListMetric200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    metrics: Optional[List[shared.InsightsV1CallMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    

@dataclass
class ListMetricResponses:
    list_metric_response: Optional[ListMetric200ApplicationJSONListMetricResponse] = field(default=None)
    

@dataclass
class ListMetricResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListMetricResponses]] = field(default=None)
    status_code: int = field(default=None)
    
