from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class CreateWorkspaceCreateWorkspaceRequest:
    event_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EventCallbackUrl' }})
    events_filter: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EventsFilter' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    multi_task_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'MultiTaskEnabled' }})
    prioritize_queue_order: Optional[shared.WorkspaceEnumQueueOrderEnum] = field(default=None, metadata={'form': { 'field_name': 'PrioritizeQueueOrder' }})
    template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Template' }})
    

@dataclass
class CreateWorkspaceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWorkspaceRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateWorkspaceCreateWorkspaceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateWorkspaceSecurity = field(default=None)
    

@dataclass
class CreateWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taskrouter_v1_workspace: Optional[shared.TaskrouterV1Workspace] = field(default=None)
    
