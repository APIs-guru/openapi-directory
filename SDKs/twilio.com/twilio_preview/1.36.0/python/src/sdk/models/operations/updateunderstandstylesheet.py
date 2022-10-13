from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_UNDERSTAND_STYLE_SHEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandStyleSheetPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandStyleSheetRequestBodyUpdateUnderstandStyleSheetRequest:
    style_sheet: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    

@dataclass
class UpdateUnderstandStyleSheetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandStyleSheetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandStyleSheetPathParams = field(default=None)
    request: Optional[UpdateUnderstandStyleSheetRequestBodyUpdateUnderstandStyleSheetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandStyleSheetSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandStyleSheetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_understand_assistant_style_sheet: Optional[shared.PreviewUnderstandAssistantStyleSheet] = field(default=None)
    
