from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_TASK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateTaskPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskUpdateTaskRequest:
    actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    actions_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ActionsUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = field()
    security: UpdateTaskSecurity = field()
    request: Optional[UpdateTaskUpdateTaskRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_task: Optional[shared.AutopilotV1AssistantTask] = field(default=None)
    
