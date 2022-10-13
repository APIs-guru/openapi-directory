from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchSamplePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSampleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSamplePathParams = field(default=None)
    security: FetchSampleSecurity = field(default=None)
    

@dataclass
class FetchSampleResponses:
    autopilot_v1_assistant_task_sample: Optional[shared.AutopilotV1AssistantTaskSample] = field(default=None)
    

@dataclass
class FetchSampleResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSampleResponses]] = field(default=None)
    status_code: int = field(default=None)
    
