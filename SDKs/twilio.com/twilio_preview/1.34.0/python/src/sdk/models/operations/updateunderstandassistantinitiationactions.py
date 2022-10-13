from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_UNDERSTAND_ASSISTANT_INITIATION_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandAssistantInitiationActionsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandAssistantInitiationActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandAssistantInitiationActionsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandAssistantInitiationActionsPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandAssistantInitiationActionsSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandAssistantInitiationActionsResponses:
    preview_understand_assistant_assistant_initiation_actions: Optional[shared.PreviewUnderstandAssistantAssistantInitiationActions] = field(default=None)
    

@dataclass
class UpdateUnderstandAssistantInitiationActionsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateUnderstandAssistantInitiationActionsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
