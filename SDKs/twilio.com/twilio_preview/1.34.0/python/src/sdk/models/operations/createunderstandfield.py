from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_UNDERSTAND_FIELD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandFieldPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandFieldSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandFieldRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUnderstandFieldPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUnderstandFieldSecurity = field(default=None)
    

@dataclass
class CreateUnderstandFieldResponses:
    preview_understand_assistant_task_field: Optional[shared.PreviewUnderstandAssistantTaskField] = field(default=None)
    

@dataclass
class CreateUnderstandFieldResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUnderstandFieldResponses]] = field(default=None)
    status_code: int = field(default=None)
    
