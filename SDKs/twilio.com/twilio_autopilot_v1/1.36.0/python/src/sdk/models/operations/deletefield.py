from dataclasses import dataclass, field
from typing import Optional
DELETE_FIELD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteFieldPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFieldSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFieldRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteFieldPathParams = field(default=None)
    security: DeleteFieldSecurity = field(default=None)
    

@dataclass
class DeleteFieldResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
