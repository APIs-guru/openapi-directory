from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_TASK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateTaskPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTaskPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTaskSecurity = field(default=None)
    

@dataclass
class UpdateTaskResponses:
    autopilot_v1_assistant_task: Optional[shared.AutopilotV1AssistantTask] = field(default=None)
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateTaskResponses]] = field(default=None)
    status_code: int = field(default=None)
    
