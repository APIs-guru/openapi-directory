from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_ASSISTANT_FALLBACK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandAssistantFallbackActionsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandAssistantFallbackActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandAssistantFallbackActionsRequest:
    path_params: FetchUnderstandAssistantFallbackActionsPathParams = field()
    security: FetchUnderstandAssistantFallbackActionsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandAssistantFallbackActionsResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_assistant_fallback_actions: Optional[shared.PreviewUnderstandAssistantAssistantFallbackActions] = field(default=None)
    
