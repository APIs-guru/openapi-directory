from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandTaskPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandTaskCreateUnderstandTaskRequest:
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    actions_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ActionsUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateUnderstandTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandTaskRequest:
    path_params: CreateUnderstandTaskPathParams = field()
    security: CreateUnderstandTaskSecurity = field()
    request: Optional[CreateUnderstandTaskCreateUnderstandTaskRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUnderstandTaskResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_task: Optional[shared.PreviewUnderstandAssistantTask] = field(default=None)
    
