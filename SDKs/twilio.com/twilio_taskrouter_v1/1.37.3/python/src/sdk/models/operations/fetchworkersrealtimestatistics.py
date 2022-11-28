from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WORKERS_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkersRealTimeStatisticsPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkersRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkersRealTimeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkersRealTimeStatisticsRequest:
    path_params: FetchWorkersRealTimeStatisticsPathParams = field()
    query_params: FetchWorkersRealTimeStatisticsQueryParams = field()
    security: FetchWorkersRealTimeStatisticsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWorkersRealTimeStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_worker_workers_real_time_statistics: Optional[shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics] = field(default=None)
    
