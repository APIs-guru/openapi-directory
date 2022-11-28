from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateTaskPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskUpdateTaskRequest:
    assignment_status: Optional[shared.TaskEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'AssignmentStatus' }})
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    priority: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    reason: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Reason' }})
    task_channel: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TaskChannel' }})
    

@dataclass
class UpdateTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskRequest:
    headers: UpdateTaskHeaders = field()
    path_params: UpdateTaskPathParams = field()
    security: UpdateTaskSecurity = field()
    request: Optional[UpdateTaskUpdateTaskRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_task: Optional[shared.TaskrouterV1WorkspaceTask] = field(default=None)
    
