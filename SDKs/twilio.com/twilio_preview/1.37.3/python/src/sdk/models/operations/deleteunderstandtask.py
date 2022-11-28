from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandTaskPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandTaskRequest:
    path_params: DeleteUnderstandTaskPathParams = field()
    security: DeleteUnderstandTaskSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUnderstandTaskResponse:
    content_type: str = field()
    status_code: int = field()
    
