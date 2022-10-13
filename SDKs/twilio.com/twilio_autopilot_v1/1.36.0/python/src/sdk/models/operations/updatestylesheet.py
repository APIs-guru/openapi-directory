from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_STYLE_SHEET_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateStyleSheetPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStyleSheetRequestBodyUpdateStyleSheetRequest:
    style_sheet: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    

@dataclass
class UpdateStyleSheetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateStyleSheetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateStyleSheetPathParams = field(default=None)
    request: Optional[UpdateStyleSheetRequestBodyUpdateStyleSheetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateStyleSheetSecurity = field(default=None)
    

@dataclass
class UpdateStyleSheetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_style_sheet: Optional[shared.AutopilotV1AssistantStyleSheet] = field(default=None)
    
