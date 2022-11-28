from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_SAMPLE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandSamplePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandSampleRequest:
    path_params: FetchUnderstandSamplePathParams = field()
    security: FetchUnderstandSampleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandSampleResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_task_sample: Optional[shared.PreviewUnderstandAssistantTaskSample] = field(default=None)
    
