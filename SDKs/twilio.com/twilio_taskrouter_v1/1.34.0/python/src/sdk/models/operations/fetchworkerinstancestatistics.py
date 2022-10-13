from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared
FETCH_WORKER_INSTANCE_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkerInstanceStatisticsPathParams:
    worker_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkerSid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkerInstanceStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkerInstanceStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkerInstanceStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkerInstanceStatisticsPathParams = field(default=None)
    query_params: FetchWorkerInstanceStatisticsQueryParams = field(default=None)
    security: FetchWorkerInstanceStatisticsSecurity = field(default=None)
    

@dataclass
class FetchWorkerInstanceStatisticsResponses:
    taskrouter_v1_workspace_worker_worker_instance_statistics: Optional[shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics] = field(default=None)
    

@dataclass
class FetchWorkerInstanceStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWorkerInstanceStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
