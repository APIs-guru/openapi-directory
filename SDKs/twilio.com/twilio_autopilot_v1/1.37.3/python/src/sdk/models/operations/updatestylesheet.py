from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_STYLE_SHEET_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateStyleSheetPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStyleSheetUpdateStyleSheetRequest:
    style_sheet: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    

@dataclass
class UpdateStyleSheetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateStyleSheetRequest:
    path_params: UpdateStyleSheetPathParams = field()
    security: UpdateStyleSheetSecurity = field()
    request: Optional[UpdateStyleSheetUpdateStyleSheetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateStyleSheetResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_style_sheet: Optional[shared.AutopilotV1AssistantStyleSheet] = field(default=None)
    
