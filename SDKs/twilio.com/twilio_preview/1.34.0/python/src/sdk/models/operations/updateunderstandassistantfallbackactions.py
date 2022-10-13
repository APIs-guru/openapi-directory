from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_UNDERSTAND_ASSISTANT_FALLBACK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandAssistantFallbackActionsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandAssistantFallbackActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandAssistantFallbackActionsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandAssistantFallbackActionsPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandAssistantFallbackActionsSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandAssistantFallbackActionsResponses:
    preview_understand_assistant_assistant_fallback_actions: Optional[shared.PreviewUnderstandAssistantAssistantFallbackActions] = field(default=None)
    

@dataclass
class UpdateUnderstandAssistantFallbackActionsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateUnderstandAssistantFallbackActionsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
