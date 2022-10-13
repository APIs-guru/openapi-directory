from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WORKERS_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkersRealTimeStatisticsPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkersRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkersRealTimeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkersRealTimeStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkersRealTimeStatisticsPathParams = field(default=None)
    query_params: FetchWorkersRealTimeStatisticsQueryParams = field(default=None)
    security: FetchWorkersRealTimeStatisticsSecurity = field(default=None)
    

@dataclass
class FetchWorkersRealTimeStatisticsResponses:
    taskrouter_v1_workspace_worker_workers_real_time_statistics: Optional[shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics] = field(default=None)
    

@dataclass
class FetchWorkersRealTimeStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWorkersRealTimeStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
