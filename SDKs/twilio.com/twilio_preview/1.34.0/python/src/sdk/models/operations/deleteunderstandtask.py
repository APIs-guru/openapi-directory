from dataclasses import dataclass, field
from typing import Optional
DELETE_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandTaskPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandTaskSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandTaskRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUnderstandTaskPathParams = field(default=None)
    security: DeleteUnderstandTaskSecurity = field(default=None)
    

@dataclass
class DeleteUnderstandTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
