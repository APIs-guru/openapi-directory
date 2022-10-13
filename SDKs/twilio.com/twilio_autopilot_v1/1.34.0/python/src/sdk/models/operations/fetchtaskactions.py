from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TASK_ACTIONS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchTaskActionsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskActionsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTaskActionsPathParams = field(default=None)
    security: FetchTaskActionsSecurity = field(default=None)
    

@dataclass
class FetchTaskActionsResponses:
    autopilot_v1_assistant_task_task_actions: Optional[shared.AutopilotV1AssistantTaskTaskActions] = field(default=None)
    

@dataclass
class FetchTaskActionsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTaskActionsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
