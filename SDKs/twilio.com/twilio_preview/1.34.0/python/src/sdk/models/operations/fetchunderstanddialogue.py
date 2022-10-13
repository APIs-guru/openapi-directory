from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_UNDERSTAND_DIALOGUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandDialoguePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandDialogueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandDialogueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUnderstandDialoguePathParams = field(default=None)
    security: FetchUnderstandDialogueSecurity = field(default=None)
    

@dataclass
class FetchUnderstandDialogueResponses:
    preview_understand_assistant_dialogue: Optional[shared.PreviewUnderstandAssistantDialogue] = field(default=None)
    

@dataclass
class FetchUnderstandDialogueResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUnderstandDialogueResponses]] = field(default=None)
    status_code: int = field(default=None)
    
