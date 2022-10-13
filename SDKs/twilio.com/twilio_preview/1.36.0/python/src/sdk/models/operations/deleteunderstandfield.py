from dataclasses import dataclass, field
from typing import Optional
DELETE_UNDERSTAND_FIELD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandFieldPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandFieldSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandFieldRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUnderstandFieldPathParams = field(default=None)
    security: DeleteUnderstandFieldSecurity = field(default=None)
    

@dataclass
class DeleteUnderstandFieldResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
