from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandAssistantPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandAssistantRequest:
    path_params: FetchUnderstandAssistantPathParams = field()
    security: FetchUnderstandAssistantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant: Optional[shared.PreviewUnderstandAssistant] = field(default=None)
    
