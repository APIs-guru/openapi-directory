from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateWorkspacePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkspaceUpdateWorkspaceRequest:
    default_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultActivitySid' }})
    event_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EventCallbackUrl' }})
    events_filter: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EventsFilter' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    multi_task_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'MultiTaskEnabled' }})
    prioritize_queue_order: Optional[shared.WorkspaceEnumQueueOrderEnum] = field(default=None, metadata={'form': { 'field_name': 'PrioritizeQueueOrder' }})
    timeout_activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TimeoutActivitySid' }})
    

@dataclass
class UpdateWorkspaceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWorkspaceRequest:
    path_params: UpdateWorkspacePathParams = field()
    security: UpdateWorkspaceSecurity = field()
    request: Optional[UpdateWorkspaceUpdateWorkspaceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace: Optional[shared.TaskrouterV1Workspace] = field(default=None)
    
