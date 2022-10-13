from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandFieldTypePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandFieldTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUnderstandFieldTypePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUnderstandFieldTypeSecurity = field(default=None)
    

@dataclass
class CreateUnderstandFieldTypeResponses:
    preview_understand_assistant_field_type: Optional[shared.PreviewUnderstandAssistantFieldType] = field(default=None)
    

@dataclass
class CreateUnderstandFieldTypeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUnderstandFieldTypeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
