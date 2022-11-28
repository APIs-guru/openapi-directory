from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_UNDERSTAND_SAMPLE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandSamplePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandSampleCreateUnderstandSampleRequest:
    language: str = field(metadata={'form': { 'field_name': 'Language' }})
    tagged_text: str = field(metadata={'form': { 'field_name': 'TaggedText' }})
    source_channel: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SourceChannel' }})
    

@dataclass
class CreateUnderstandSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandSampleRequest:
    path_params: CreateUnderstandSamplePathParams = field()
    security: CreateUnderstandSampleSecurity = field()
    request: Optional[CreateUnderstandSampleCreateUnderstandSampleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUnderstandSampleResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_task_sample: Optional[shared.PreviewUnderstandAssistantTaskSample] = field(default=None)
    
