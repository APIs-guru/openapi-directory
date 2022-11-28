from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


FETCH_WORKFLOW_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkflowStatisticsPathParams:
    workflow_sid: str = field(metadata={'path_param': { 'field_name': 'WorkflowSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkflowStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    split_by_wait_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SplitByWaitTime', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkflowStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkflowStatisticsRequest:
    path_params: FetchWorkflowStatisticsPathParams = field()
    query_params: FetchWorkflowStatisticsQueryParams = field()
    security: FetchWorkflowStatisticsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWorkflowStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_workflow_workflow_statistics: Optional[shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics] = field(default=None)
    
