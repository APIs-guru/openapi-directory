from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_UNDERSTAND_FIELD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandFieldPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandFieldSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandFieldRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUnderstandFieldPathParams = field(default=None)
    security: FetchUnderstandFieldSecurity = field(default=None)
    

@dataclass
class FetchUnderstandFieldResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_understand_assistant_task_field: Optional[shared.PreviewUnderstandAssistantTaskField] = field(default=None)
    
