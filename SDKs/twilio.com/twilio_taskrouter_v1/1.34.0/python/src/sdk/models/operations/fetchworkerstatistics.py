from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared
FETCH_WORKER_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkerStatisticsPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkerStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    task_queue_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueName', 'style': 'form', 'explode': True }})
    task_queue_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskQueueSid', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkerStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkerStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkerStatisticsPathParams = field(default=None)
    query_params: FetchWorkerStatisticsQueryParams = field(default=None)
    security: FetchWorkerStatisticsSecurity = field(default=None)
    

@dataclass
class FetchWorkerStatisticsResponses:
    taskrouter_v1_workspace_worker_worker_statistics: Optional[shared.TaskrouterV1WorkspaceWorkerWorkerStatistics] = field(default=None)
    

@dataclass
class FetchWorkerStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWorkerStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
