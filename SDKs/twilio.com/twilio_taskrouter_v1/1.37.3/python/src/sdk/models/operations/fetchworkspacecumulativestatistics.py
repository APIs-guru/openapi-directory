from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


FETCH_WORKSPACE_CUMULATIVE_STATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class FetchWorkspaceCumulativeStatisticsPathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWorkspaceCumulativeStatisticsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Minutes', 'style': 'form', 'explode': True }})
    split_by_wait_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SplitByWaitTime', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    task_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaskChannel', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWorkspaceCumulativeStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWorkspaceCumulativeStatisticsRequest:
    path_params: FetchWorkspaceCumulativeStatisticsPathParams = field()
    query_params: FetchWorkspaceCumulativeStatisticsQueryParams = field()
    security: FetchWorkspaceCumulativeStatisticsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWorkspaceCumulativeStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_workspace_cumulative_statistics: Optional[shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics] = field(default=None)
    
