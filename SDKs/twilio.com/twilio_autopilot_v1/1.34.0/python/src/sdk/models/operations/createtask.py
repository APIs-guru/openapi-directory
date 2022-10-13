from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TASK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateTaskPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTaskPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTaskSecurity = field(default=None)
    

@dataclass
class CreateTaskResponses:
    autopilot_v1_assistant_task: Optional[shared.AutopilotV1AssistantTask] = field(default=None)
    

@dataclass
class CreateTaskResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateTaskResponses]] = field(default=None)
    status_code: int = field(default=None)
    
