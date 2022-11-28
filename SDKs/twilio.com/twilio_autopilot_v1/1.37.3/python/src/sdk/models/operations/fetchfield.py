from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FIELD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchFieldPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFieldSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFieldRequest:
    path_params: FetchFieldPathParams = field()
    security: FetchFieldSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFieldResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_task_field: Optional[shared.AutopilotV1AssistantTaskField] = field(default=None)
    
