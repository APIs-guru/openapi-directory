from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_UNDERSTAND_STYLE_SHEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandStyleSheetPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest:
    style_sheet: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    

@dataclass
class UpdateUnderstandStyleSheetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandStyleSheetRequest:
    path_params: UpdateUnderstandStyleSheetPathParams = field()
    security: UpdateUnderstandStyleSheetSecurity = field()
    request: Optional[UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUnderstandStyleSheetResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_style_sheet: Optional[shared.PreviewUnderstandAssistantStyleSheet] = field(default=None)
    
