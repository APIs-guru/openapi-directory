from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_ASSISTANT_INITIATION_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandAssistantInitiationActionsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandAssistantInitiationActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandAssistantInitiationActionsRequest:
    path_params: FetchUnderstandAssistantInitiationActionsPathParams = field()
    security: FetchUnderstandAssistantInitiationActionsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandAssistantInitiationActionsResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_assistant_initiation_actions: Optional[shared.PreviewUnderstandAssistantAssistantInitiationActions] = field(default=None)
    
