from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared
FETCH_TASK_QUEUE_CUMULATIVE_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchTaskQueueCumulativeStatisticsPathParams:
    task_queue_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskQueueSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskQueueCumulativeStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    split_by_wait_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SplitByWaitTime', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchTaskQueueCumulativeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskQueueCumulativeStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTaskQueueCumulativeStatisticsPathParams = field(default=None)
    query_params: FetchTaskQueueCumulativeStatisticsQueryParams = field(default=None)
    security: FetchTaskQueueCumulativeStatisticsSecurity = field(default=None)
    

@dataclass
class FetchTaskQueueCumulativeStatisticsResponses:
    taskrouter_v1_workspace_task_queue_task_queue_cumulative_statistics: Optional[shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics] = field(default=None)
    

@dataclass
class FetchTaskQueueCumulativeStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTaskQueueCumulativeStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
