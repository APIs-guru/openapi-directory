from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateTaskChannelPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskChannelUpdateTaskChannelRequest:
    channel_optimized_routing: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ChannelOptimizedRouting' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateTaskChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskChannelRequest:
    path_params: UpdateTaskChannelPathParams = field()
    security: UpdateTaskChannelSecurity = field()
    request: Optional[UpdateTaskChannelUpdateTaskChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateTaskChannelResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_task_channel: Optional[shared.TaskrouterV1WorkspaceTaskChannel] = field(default=None)
    
