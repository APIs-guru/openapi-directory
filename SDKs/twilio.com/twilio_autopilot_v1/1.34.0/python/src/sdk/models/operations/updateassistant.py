from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateAssistantPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAssistantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateAssistantPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAssistantSecurity = field(default=None)
    

@dataclass
class UpdateAssistantResponses:
    autopilot_v1_assistant: Optional[shared.AutopilotV1Assistant] = field(default=None)
    

@dataclass
class UpdateAssistantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateAssistantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
