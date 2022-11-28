from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandFieldTypePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandFieldTypeRequest:
    path_params: UpdateUnderstandFieldTypePathParams = field()
    security: UpdateUnderstandFieldTypeSecurity = field()
    request: Optional[UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUnderstandFieldTypeResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_field_type: Optional[shared.PreviewUnderstandAssistantFieldType] = field(default=None)
    
