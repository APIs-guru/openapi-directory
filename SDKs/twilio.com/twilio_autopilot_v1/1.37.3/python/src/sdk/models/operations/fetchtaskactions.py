from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TASK_ACTIONS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchTaskActionsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTaskActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTaskActionsRequest:
    path_params: FetchTaskActionsPathParams = field()
    security: FetchTaskActionsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTaskActionsResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_task_task_actions: Optional[shared.AutopilotV1AssistantTaskTaskActions] = field(default=None)
    
