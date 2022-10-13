from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandTaskPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUnderstandTaskPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUnderstandTaskSecurity = field(default=None)
    

@dataclass
class CreateUnderstandTaskResponses:
    preview_understand_assistant_task: Optional[shared.PreviewUnderstandAssistantTask] = field(default=None)
    

@dataclass
class CreateUnderstandTaskResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUnderstandTaskResponses]] = field(default=None)
    status_code: int = field(default=None)
    
