from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_UNDERSTAND_STYLE_SHEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandStyleSheetPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandStyleSheetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandStyleSheetRequest:
    path_params: FetchUnderstandStyleSheetPathParams = field()
    security: FetchUnderstandStyleSheetSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUnderstandStyleSheetResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_style_sheet: Optional[shared.PreviewUnderstandAssistantStyleSheet] = field(default=None)
    
