from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WORKSPACE_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkspaceRealTimeStatisticsPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkspaceRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkspaceRealTimeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkspaceRealTimeStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkspaceRealTimeStatisticsPathParams = field(default=None)
    query_params: FetchWorkspaceRealTimeStatisticsQueryParams = field(default=None)
    security: FetchWorkspaceRealTimeStatisticsSecurity = field(default=None)
    

@dataclass
class FetchWorkspaceRealTimeStatisticsResponses:
    taskrouter_v1_workspace_workspace_real_time_statistics: Optional[shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics] = field(default=None)
    

@dataclass
class FetchWorkspaceRealTimeStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWorkspaceRealTimeStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
