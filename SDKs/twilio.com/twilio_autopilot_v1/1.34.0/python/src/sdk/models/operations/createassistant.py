from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAssistantRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateAssistantSecurity = field(default=None)
    

@dataclass
class CreateAssistantResponses:
    autopilot_v1_assistant: Optional[shared.AutopilotV1Assistant] = field(default=None)
    

@dataclass
class CreateAssistantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateAssistantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
