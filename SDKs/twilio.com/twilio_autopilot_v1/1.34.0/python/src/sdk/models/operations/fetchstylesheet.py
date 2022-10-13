from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_STYLE_SHEET_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchStyleSheetPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchStyleSheetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchStyleSheetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchStyleSheetPathParams = field(default=None)
    security: FetchStyleSheetSecurity = field(default=None)
    

@dataclass
class FetchStyleSheetResponses:
    autopilot_v1_assistant_style_sheet: Optional[shared.AutopilotV1AssistantStyleSheet] = field(default=None)
    

@dataclass
class FetchStyleSheetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchStyleSheetResponses]] = field(default=None)
    status_code: int = field(default=None)
    
