from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TASK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchTaskPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskRequest:
    path_params: FetchTaskPathParams = field()
    security: FetchTaskSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTaskResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_task: Optional[shared.AutopilotV1AssistantTask] = field(default=None)
    
