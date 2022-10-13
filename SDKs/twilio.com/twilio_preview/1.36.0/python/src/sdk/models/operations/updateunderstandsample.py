from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_UNDERSTAND_SAMPLE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandSamplePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandSampleRequestBodyUpdateUnderstandSampleRequest:
    language: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Language' }})
    source_channel: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SourceChannel' }})
    tagged_text: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TaggedText' }})
    

@dataclass
class UpdateUnderstandSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandSampleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandSamplePathParams = field(default=None)
    request: Optional[UpdateUnderstandSampleRequestBodyUpdateUnderstandSampleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandSampleSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandSampleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_understand_assistant_task_sample: Optional[shared.PreviewUnderstandAssistantTaskSample] = field(default=None)
    
