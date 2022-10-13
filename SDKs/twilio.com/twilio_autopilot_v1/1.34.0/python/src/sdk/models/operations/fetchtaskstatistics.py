from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TASK_STATISTICS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchTaskStatisticsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskStatisticsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTaskStatisticsPathParams = field(default=None)
    security: FetchTaskStatisticsSecurity = field(default=None)
    

@dataclass
class FetchTaskStatisticsResponses:
    autopilot_v1_assistant_task_task_statistics: Optional[shared.AutopilotV1AssistantTaskTaskStatistics] = field(default=None)
    

@dataclass
class FetchTaskStatisticsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTaskStatisticsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
