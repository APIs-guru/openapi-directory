from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandFieldTypePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandFieldTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUnderstandFieldTypePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUnderstandFieldTypeSecurity = field(default=None)
    

@dataclass
class UpdateUnderstandFieldTypeResponses:
    preview_understand_assistant_field_type: Optional[shared.PreviewUnderstandAssistantFieldType] = field(default=None)
    

@dataclass
class UpdateUnderstandFieldTypeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateUnderstandFieldTypeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
