from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateTaskQueuePathParams:
    workspace_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskQueueCreateTaskQueueRequest:
    assignment_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AssignmentActivitySid' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    max_reserved_workers: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxReservedWorkers' }})
    reservation_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ReservationActivitySid' }})
    target_workers: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TargetWorkers' }})
    task_order: Optional[shared.TaskQueueEnumTaskOrderEnum] = field(default=None, metadata={'form': { 'field_name': 'TaskOrder' }})
    

@dataclass
class CreateTaskQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTaskQueueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTaskQueuePathParams = field(default=None)
    request: Optional[CreateTaskQueueCreateTaskQueueRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTaskQueueSecurity = field(default=None)
    

@dataclass
class CreateTaskQueueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace_task_queue: Optional[shared.TaskrouterV1WorkspaceTaskQueue] = field(default=None)
    
