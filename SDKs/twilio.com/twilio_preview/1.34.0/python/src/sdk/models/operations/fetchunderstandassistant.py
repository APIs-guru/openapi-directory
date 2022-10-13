from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandAssistantPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandAssistantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUnderstandAssistantPathParams = field(default=None)
    security: FetchUnderstandAssistantSecurity = field(default=None)
    

@dataclass
class FetchUnderstandAssistantResponses:
    preview_understand_assistant: Optional[shared.PreviewUnderstandAssistant] = field(default=None)
    

@dataclass
class FetchUnderstandAssistantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUnderstandAssistantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
