from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandAssistantPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandAssistantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandAssistantPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandAssistantSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandAssistantResponses:
    preview_understand_assistant: Optional[shared.PreviewUnderstandAssistant] = field(default=None)
    

@dataclass
class UpdateUnderstandAssistantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateUnderstandAssistantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
