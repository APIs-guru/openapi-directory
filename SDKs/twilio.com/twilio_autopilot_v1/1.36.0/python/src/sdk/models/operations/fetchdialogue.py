from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DIALOGUE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchDialoguePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDialogueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDialogueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDialoguePathParams = field(default=None)
    security: FetchDialogueSecurity = field(default=None)
    

@dataclass
class FetchDialogueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_dialogue: Optional[shared.AutopilotV1AssistantDialogue] = field(default=None)
    
