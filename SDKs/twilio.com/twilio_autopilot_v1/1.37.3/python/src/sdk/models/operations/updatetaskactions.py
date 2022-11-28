from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_TASK_ACTIONS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateTaskActionsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskActionsUpdateTaskActionsRequest:
    actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    

@dataclass
class UpdateTaskActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskActionsRequest:
    path_params: UpdateTaskActionsPathParams = field()
    security: UpdateTaskActionsSecurity = field()
    request: Optional[UpdateTaskActionsUpdateTaskActionsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateTaskActionsResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_task_task_actions: Optional[shared.AutopilotV1AssistantTaskTaskActions] = field(default=None)
    
