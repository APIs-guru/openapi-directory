from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class UpdateWorkerPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkerHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkerUpdateWorkerRequest:
    activity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ActivitySid' }})
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    reject_pending_reservations: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'RejectPendingReservations' }})
    

@dataclass
class UpdateWorkerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWorkerRequest:
    headers: UpdateWorkerHeaders = field()
    path_params: UpdateWorkerPathParams = field()
    security: UpdateWorkerSecurity = field()
    request: Optional[UpdateWorkerUpdateWorkerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateWorkerResponse:
    content_type: str = field()
    status_code: int = field()
    taskrouter_v1_workspace_worker: Optional[shared.TaskrouterV1WorkspaceWorker] = field(default=None)
    
