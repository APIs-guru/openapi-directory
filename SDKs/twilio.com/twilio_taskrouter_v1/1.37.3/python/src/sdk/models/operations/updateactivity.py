from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_ACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateActivityPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateActivityUpdateActivityRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateActivitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateActivityRequest:
    path_params: UpdateActivityPathParams = field()
    security: UpdateActivitySecurity = field()
    request: Optional[UpdateActivityUpdateActivityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateActivityResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_activity: Optional[shared.TaskrouterV1WorkspaceActivity] = field(default=None)
    
