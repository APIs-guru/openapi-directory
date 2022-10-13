from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_UNDERSTAND_ASSISTANT_FALLBACK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandAssistantFallbackActionsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandAssistantFallbackActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandAssistantFallbackActionsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUnderstandAssistantFallbackActionsPathParams = field(default=None)
    security: FetchUnderstandAssistantFallbackActionsSecurity = field(default=None)
    

@dataclass
class FetchUnderstandAssistantFallbackActionsResponses:
    preview_understand_assistant_assistant_fallback_actions: Optional[shared.PreviewUnderstandAssistantAssistantFallbackActions] = field(default=None)
    

@dataclass
class FetchUnderstandAssistantFallbackActionsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUnderstandAssistantFallbackActionsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
