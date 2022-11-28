from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateTaskQueuePathParams:
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskQueueCreateTaskQueueRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    assignment_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AssignmentActivitySid' }})
    max_reserved_workers: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxReservedWorkers' }})
    reservation_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ReservationActivitySid' }})
    target_workers: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TargetWorkers' }})
    task_order: Optional[shared.TaskQueueEnumTaskOrderEnum] = field(default=None, metadata={'form': { 'field_name': 'TaskOrder' }})
    

@dataclass
class CreateTaskQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTaskQueueRequest:
    path_params: CreateTaskQueuePathParams = field()
    security: CreateTaskQueueSecurity = field()
    request: Optional[CreateTaskQueueCreateTaskQueueRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTaskQueueResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_task_queue: Optional[shared.TaskrouterV1WorkspaceTaskQueue] = field(default=None)
    
