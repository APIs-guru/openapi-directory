from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateAssistantCreateAssistantRequest:
    callback_events: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackEvents' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    defaults: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Defaults' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    log_queries: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LogQueries' }})
    style_sheet: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAssistantRequest:
    security: CreateAssistantSecurity = field()
    request: Optional[CreateAssistantCreateAssistantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant: Optional[shared.AutopilotV1Assistant] = field(default=None)
    
