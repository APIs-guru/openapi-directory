from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateSamplePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSampleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSamplePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSampleSecurity = field(default=None)
    

@dataclass
class CreateSampleResponses:
    autopilot_v1_assistant_task_sample: Optional[shared.AutopilotV1AssistantTaskSample] = field(default=None)
    

@dataclass
class CreateSampleResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSampleResponses]] = field(default=None)
    status_code: int = field(default=None)
    
