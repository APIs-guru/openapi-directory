from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchAssistantPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAssistantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchAssistantPathParams = field(default=None)
    security: FetchAssistantSecurity = field(default=None)
    

@dataclass
class FetchAssistantResponses:
    autopilot_v1_assistant: Optional[shared.AutopilotV1Assistant] = field(default=None)
    

@dataclass
class FetchAssistantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchAssistantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
