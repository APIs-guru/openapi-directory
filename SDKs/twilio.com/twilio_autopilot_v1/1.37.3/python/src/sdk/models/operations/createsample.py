from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateSamplePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSampleCreateSampleRequest:
    language: str = field(metadata={'form': { 'field_name': 'Language' }})
    tagged_text: str = field(metadata={'form': { 'field_name': 'TaggedText' }})
    source_channel: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SourceChannel' }})
    

@dataclass
class CreateSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSampleRequest:
    path_params: CreateSamplePathParams = field()
    security: CreateSampleSecurity = field()
    request: Optional[CreateSampleCreateSampleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSampleResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_task_sample: Optional[shared.AutopilotV1AssistantTaskSample] = field(default=None)
    
