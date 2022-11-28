from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateAssistantPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssistantUpdateAssistantRequest:
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAssistantRequest:
    path_params: UpdateAssistantPathParams = field()
    security: UpdateAssistantSecurity = field()
    request: Optional[UpdateAssistantUpdateAssistantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant: Optional[shared.AutopilotV1Assistant] = field(default=None)
    
