from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandTaskPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandTaskPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandTaskSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandTaskResponses:
    preview_understand_assistant_task: Optional[shared.PreviewUnderstandAssistantTask] = field(default=None)
    

@dataclass
class UpdateUnderstandTaskResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateUnderstandTaskResponses]] = field(default=None)
    status_code: int = field(default=None)
    
