from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandAssistantPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandAssistantUpdateUnderstandAssistantRequest:
    callback_events: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackEvents' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    fallback_actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'FallbackActions' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    initiation_actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'InitiationActions' }})
    log_queries: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LogQueries' }})
    style_sheet: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateUnderstandAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandAssistantRequest:
    path_params: UpdateUnderstandAssistantPathParams = field()
    security: UpdateUnderstandAssistantSecurity = field()
    request: Optional[UpdateUnderstandAssistantUpdateUnderstandAssistantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUnderstandAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant: Optional[shared.PreviewUnderstandAssistant] = field(default=None)
    
