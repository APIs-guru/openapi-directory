from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateUnderstandFieldTypePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest:
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUnderstandFieldTypeRequest:
    path_params: CreateUnderstandFieldTypePathParams = field()
    security: CreateUnderstandFieldTypeSecurity = field()
    request: Optional[CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUnderstandFieldTypeResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_field_type: Optional[shared.PreviewUnderstandAssistantFieldType] = field(default=None)
    
