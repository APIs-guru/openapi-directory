from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_UNDERSTAND_FIELD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandFieldPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandFieldSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandFieldRequest:
    path_params: DeleteUnderstandFieldPathParams = field()
    security: DeleteUnderstandFieldSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUnderstandFieldResponse:
    content_type: str = field()
    status_code: int = field()
    
