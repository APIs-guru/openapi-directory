from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_UNDERSTAND_ASSISTANT_INITIATION_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandAssistantInitiationActionsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest:
    initiation_actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'InitiationActions' }})
    

@dataclass
class UpdateUnderstandAssistantInitiationActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandAssistantInitiationActionsRequest:
    path_params: UpdateUnderstandAssistantInitiationActionsPathParams = field()
    security: UpdateUnderstandAssistantInitiationActionsSecurity = field()
    request: Optional[UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUnderstandAssistantInitiationActionsResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_assistant_initiation_actions: Optional[shared.PreviewUnderstandAssistantAssistantInitiationActions] = field(default=None)
    
