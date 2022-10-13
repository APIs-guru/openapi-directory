from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_UNDERSTAND_TASK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandTaskActionsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandTaskActionsRequestBodyUpdateUnderstandTaskActionsRequest:
    actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    

@dataclass
class UpdateUnderstandTaskActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandTaskActionsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandTaskActionsPathParams = field(default=None)
    request: Optional[UpdateUnderstandTaskActionsRequestBodyUpdateUnderstandTaskActionsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandTaskActionsSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandTaskActionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_understand_assistant_task_task_actions: Optional[shared.PreviewUnderstandAssistantTaskTaskActions] = field(default=None)
    
