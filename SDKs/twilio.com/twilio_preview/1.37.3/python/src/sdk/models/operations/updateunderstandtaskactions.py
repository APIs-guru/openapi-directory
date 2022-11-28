from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_UNDERSTAND_TASK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandTaskActionsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest:
    actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    

@dataclass
class UpdateUnderstandTaskActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandTaskActionsRequest:
    path_params: UpdateUnderstandTaskActionsPathParams = field()
    security: UpdateUnderstandTaskActionsSecurity = field()
    request: Optional[UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUnderstandTaskActionsResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_task_task_actions: Optional[shared.PreviewUnderstandAssistantTaskTaskActions] = field(default=None)
    
