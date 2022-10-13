from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared
FETCH_WORKSPACE_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkspaceStatisticsPathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkspaceStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    split_by_wait_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SplitByWaitTime', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkspaceStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkspaceStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWorkspaceStatisticsPathParams = field(default=None)
    query_params: FetchWorkspaceStatisticsQueryParams = field(default=None)
    security: FetchWorkspaceStatisticsSecurity = field(default=None)
    

@dataclass
class FetchWorkspaceStatisticsResponses:
    taskrouter_v1_workspace_workspace_statistics: Optional[shared.TaskrouterV1WorkspaceWorkspaceStatistics] = field(default=None)
    

@dataclass
class FetchWorkspaceStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWorkspaceStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
