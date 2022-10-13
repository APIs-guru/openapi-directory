from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_TASK_QUEUES_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListTaskQueuesStatisticsPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTaskQueuesStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    split_by_wait_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SplitByWaitTime', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTaskQueuesStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListTaskQueuesStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListTaskQueuesStatisticsPathParams = field(default=None)
    query_params: ListTaskQueuesStatisticsQueryParams = field(default=None)
    security: ListTaskQueuesStatisticsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListTaskQueuesStatistics200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListTaskQueuesStatistics200ApplicationJSONListTaskQueuesStatisticsResponse:
    meta: Optional[ListTaskQueuesStatistics200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    task_queues_statistics: Optional[List[shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_queues_statistics' }})
    

@dataclass
class ListTaskQueuesStatisticsResponses:
    list_task_queues_statistics_response: Optional[ListTaskQueuesStatistics200ApplicationJSONListTaskQueuesStatisticsResponse] = field(default=None)
    

@dataclass
class ListTaskQueuesStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListTaskQueuesStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
