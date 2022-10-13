from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandAssistantRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUnderstandAssistantSecurity = field(default=None)
    

@dataclass
class CreateUnderstandAssistantResponses:
    preview_understand_assistant: Optional[shared.PreviewUnderstandAssistant] = field(default=None)
    

@dataclass
class CreateUnderstandAssistantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUnderstandAssistantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
