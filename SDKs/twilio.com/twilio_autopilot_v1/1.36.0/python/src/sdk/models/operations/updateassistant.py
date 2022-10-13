from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateAssistantPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssistantRequestBodyUpdateAssistantRequest:
    callback_events: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackEvents' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    defaults: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Defaults' }})
    development_stage: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DevelopmentStage' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    log_queries: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LogQueries' }})
    style_sheet: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAssistantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateAssistantPathParams = field(default=None)
    request: Optional[UpdateAssistantRequestBodyUpdateAssistantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAssistantSecurity = field(default=None)
    

@dataclass
class UpdateAssistantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant: Optional[shared.AutopilotV1Assistant] = field(default=None)
    
