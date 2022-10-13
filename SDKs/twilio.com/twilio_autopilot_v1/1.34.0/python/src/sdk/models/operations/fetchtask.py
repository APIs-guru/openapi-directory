from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TASK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchTaskPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTaskPathParams = field(default=None)
    security: FetchTaskSecurity = field(default=None)
    

@dataclass
class FetchTaskResponses:
    autopilot_v1_assistant_task: Optional[shared.AutopilotV1AssistantTask] = field(default=None)
    

@dataclass
class FetchTaskResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTaskResponses]] = field(default=None)
    status_code: int = field(default=None)
    
