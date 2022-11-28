from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteSamplePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSampleRequest:
    path_params: DeleteSamplePathParams = field()
    security: DeleteSampleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSampleResponse:
    content_type: str = field()
    status_code: int = field()
    
