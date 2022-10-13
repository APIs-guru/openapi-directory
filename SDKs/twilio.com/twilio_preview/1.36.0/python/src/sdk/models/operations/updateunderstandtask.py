from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandTaskPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandTaskRequestBodyUpdateUnderstandTaskRequest:
    actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    actions_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ActionsUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateUnderstandTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandTaskPathParams = field(default=None)
    request: Optional[UpdateUnderstandTaskRequestBodyUpdateUnderstandTaskRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandTaskSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_understand_assistant_task: Optional[shared.PreviewUnderstandAssistantTask] = field(default=None)
    
