from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_UNDERSTAND_STYLE_SHEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandStyleSheetPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandStyleSheetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandStyleSheetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandStyleSheetPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandStyleSheetSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandStyleSheetResponses:
    preview_understand_assistant_style_sheet: Optional[shared.PreviewUnderstandAssistantStyleSheet] = field(default=None)
    

@dataclass
class UpdateUnderstandStyleSheetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateUnderstandStyleSheetResponses]] = field(default=None)
    status_code: int = field(default=None)
    
