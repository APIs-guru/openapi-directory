from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_TASK_STATISTICS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandTaskStatisticsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandTaskStatisticsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandTaskStatisticsRequest:
    path_params: FetchUnderstandTaskStatisticsPathParams = field()
    security: FetchUnderstandTaskStatisticsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandTaskStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_task_task_statistics: Optional[shared.PreviewUnderstandAssistantTaskTaskStatistics] = field(default=None)
    
