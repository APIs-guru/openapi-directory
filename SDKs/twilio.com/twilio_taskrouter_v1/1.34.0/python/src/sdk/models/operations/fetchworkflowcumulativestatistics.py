from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared
FETCH_WORKFLOW_CUMULATIVE_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkflowCumulativeStatisticsPathParams:
    workflow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkflowSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkflowCumulativeStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    split_by_wait_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SplitByWaitTime', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkflowCumulativeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkflowCumulativeStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkflowCumulativeStatisticsPathParams = field(default=None)
    query_params: FetchWorkflowCumulativeStatisticsQueryParams = field(default=None)
    security: FetchWorkflowCumulativeStatisticsSecurity = field(default=None)
    

@dataclass
class FetchWorkflowCumulativeStatisticsResponses:
    taskrouter_v1_workspace_workflow_workflow_cumulative_statistics: Optional[shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics] = field(default=None)
    

@dataclass
class FetchWorkflowCumulativeStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWorkflowCumulativeStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
