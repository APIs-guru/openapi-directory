from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WORKSPACE_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkspaceRealTimeStatisticsPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkspaceRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkspaceRealTimeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkspaceRealTimeStatisticsRequest:
    path_params: FetchWorkspaceRealTimeStatisticsPathParams = field()
    query_params: FetchWorkspaceRealTimeStatisticsQueryParams = field()
    security: FetchWorkspaceRealTimeStatisticsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWorkspaceRealTimeStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_workspace_real_time_statistics: Optional[shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics] = field(default=None)
    
