from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateTaskQueuePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskQueueUpdateTaskQueueRequest:
    assignment_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AssignmentActivitySid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    max_reserved_workers: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxReservedWorkers' }})
    reservation_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ReservationActivitySid' }})
    target_workers: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TargetWorkers' }})
    task_order: Optional[shared.TaskQueueEnumTaskOrderEnum] = field(default=None, metadata={'form': { 'field_name': 'TaskOrder' }})
    

@dataclass
class UpdateTaskQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskQueueRequest:
    path_params: UpdateTaskQueuePathParams = field()
    security: UpdateTaskQueueSecurity = field()
    request: Optional[UpdateTaskQueueUpdateTaskQueueRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateTaskQueueResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_task_queue: Optional[shared.TaskrouterV1WorkspaceTaskQueue] = field(default=None)
    
