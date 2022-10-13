from dataclasses import dataclass, field
from typing import Optional
DELETE_UNDERSTAND_SAMPLE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandSamplePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandSampleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUnderstandSamplePathParams = field(default=None)
    security: DeleteUnderstandSampleSecurity = field(default=None)
    

@dataclass
class DeleteUnderstandSampleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
