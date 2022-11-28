from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WORKFLOW_REAL_TIME_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkflowRealTimeStatisticsPathParams:
    workflow_sid: str = field(metadata={'path_param': { 'field_name': 'WorkflowSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkflowRealTimeStatisticsQueryParams:
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkflowRealTimeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkflowRealTimeStatisticsRequest:
    path_params: FetchWorkflowRealTimeStatisticsPathParams = field()
    query_params: FetchWorkflowRealTimeStatisticsQueryParams = field()
    security: FetchWorkflowRealTimeStatisticsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWorkflowRealTimeStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_workflow_workflow_real_time_statistics: Optional[shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics] = field(default=None)
    
