from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateAssistantRequestBodyCreateAssistantRequest:
    callback_events: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackEvents' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    defaults: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Defaults' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    log_queries: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LogQueries' }})
    style_sheet: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAssistantRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateAssistantRequestBodyCreateAssistantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateAssistantSecurity = field(default=None)
    

@dataclass
class CreateAssistantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant: Optional[shared.AutopilotV1Assistant] = field(default=None)
    
