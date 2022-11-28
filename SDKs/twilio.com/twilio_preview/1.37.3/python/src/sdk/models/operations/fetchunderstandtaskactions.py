from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_TASK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandTaskActionsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandTaskActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandTaskActionsRequest:
    path_params: FetchUnderstandTaskActionsPathParams = field()
    security: FetchUnderstandTaskActionsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandTaskActionsResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_task_task_actions: Optional[shared.PreviewUnderstandAssistantTaskTaskActions] = field(default=None)
    
