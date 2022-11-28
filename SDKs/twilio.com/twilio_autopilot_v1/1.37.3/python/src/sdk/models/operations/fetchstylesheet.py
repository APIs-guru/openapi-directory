from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_STYLE_SHEET_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchStyleSheetPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchStyleSheetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchStyleSheetRequest:
    path_params: FetchStyleSheetPathParams = field()
    security: FetchStyleSheetSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchStyleSheetResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_style_sheet: Optional[shared.AutopilotV1AssistantStyleSheet] = field(default=None)
    
