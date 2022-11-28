from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandTaskPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandTaskRequest:
    path_params: FetchUnderstandTaskPathParams = field()
    security: FetchUnderstandTaskSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandTaskResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_task: Optional[shared.PreviewUnderstandAssistantTask] = field(default=None)
    
