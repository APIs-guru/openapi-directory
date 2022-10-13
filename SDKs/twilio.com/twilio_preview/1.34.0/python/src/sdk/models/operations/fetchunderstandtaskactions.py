from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_UNDERSTAND_TASK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandTaskActionsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandTaskActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandTaskActionsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUnderstandTaskActionsPathParams = field(default=None)
    security: FetchUnderstandTaskActionsSecurity = field(default=None)
    

@dataclass
class FetchUnderstandTaskActionsResponses:
    preview_understand_assistant_task_task_actions: Optional[shared.PreviewUnderstandAssistantTaskTaskActions] = field(default=None)
    

@dataclass
class FetchUnderstandTaskActionsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUnderstandTaskActionsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
