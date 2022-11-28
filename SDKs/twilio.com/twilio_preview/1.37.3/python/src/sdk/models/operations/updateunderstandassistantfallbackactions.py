from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_UNDERSTAND_ASSISTANT_FALLBACK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandAssistantFallbackActionsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest:
    fallback_actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'FallbackActions' }})
    

@dataclass
class UpdateUnderstandAssistantFallbackActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandAssistantFallbackActionsRequest:
    path_params: UpdateUnderstandAssistantFallbackActionsPathParams = field()
    security: UpdateUnderstandAssistantFallbackActionsSecurity = field()
    request: Optional[UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUnderstandAssistantFallbackActionsResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_assistant_fallback_actions: Optional[shared.PreviewUnderstandAssistantAssistantFallbackActions] = field(default=None)
    
