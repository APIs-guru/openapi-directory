from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_UNDERSTAND_ASSISTANT_INITIATION_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandAssistantInitiationActionsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandAssistantInitiationActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandAssistantInitiationActionsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUnderstandAssistantInitiationActionsPathParams = field(default=None)
    security: FetchUnderstandAssistantInitiationActionsSecurity = field(default=None)
    

@dataclass
class FetchUnderstandAssistantInitiationActionsResponses:
    preview_understand_assistant_assistant_initiation_actions: Optional[shared.PreviewUnderstandAssistantAssistantInitiationActions] = field(default=None)
    

@dataclass
class FetchUnderstandAssistantInitiationActionsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUnderstandAssistantInitiationActionsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
