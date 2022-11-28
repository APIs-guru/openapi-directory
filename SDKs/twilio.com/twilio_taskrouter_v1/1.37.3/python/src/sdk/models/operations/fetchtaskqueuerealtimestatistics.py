from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TASK_QUEUE_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchTaskQueueRealTimeStatisticsPathParams:
    task_queue_sid: str = field(metadata={'path_param': { 'field_name': 'TaskQueueSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskQueueRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchTaskQueueRealTimeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskQueueRealTimeStatisticsRequest:
    path_params: FetchTaskQueueRealTimeStatisticsPathParams = field()
    query_params: FetchTaskQueueRealTimeStatisticsQueryParams = field()
    security: FetchTaskQueueRealTimeStatisticsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTaskQueueRealTimeStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_task_queue_task_queue_real_time_statistics: Optional[shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics] = field(default=None)
    
