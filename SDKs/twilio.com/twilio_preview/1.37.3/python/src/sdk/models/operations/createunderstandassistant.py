from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandAssistantCreateUnderstandAssistantRequest:
    callback_events: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackEvents' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    fallback_actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'FallbackActions' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    initiation_actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'InitiationActions' }})
    log_queries: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LogQueries' }})
    style_sheet: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateUnderstandAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandAssistantRequest:
    security: CreateUnderstandAssistantSecurity = field()
    request: Optional[CreateUnderstandAssistantCreateUnderstandAssistantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUnderstandAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant: Optional[shared.PreviewUnderstandAssistant] = field(default=None)
    
