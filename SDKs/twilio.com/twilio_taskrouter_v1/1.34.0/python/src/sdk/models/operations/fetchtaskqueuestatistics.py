from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared
FETCH_TASK_QUEUE_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchTaskQueueStatisticsPathParams:
    task_queue_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskQueueSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskQueueStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    split_by_wait_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SplitByWaitTime', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchTaskQueueStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskQueueStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTaskQueueStatisticsPathParams = field(default=None)
    query_params: FetchTaskQueueStatisticsQueryParams = field(default=None)
    security: FetchTaskQueueStatisticsSecurity = field(default=None)
    

@dataclass
class FetchTaskQueueStatisticsResponses:
    taskrouter_v1_workspace_task_queue_task_queue_statistics: Optional[shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics] = field(default=None)
    

@dataclass
class FetchTaskQueueStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTaskQueueStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
