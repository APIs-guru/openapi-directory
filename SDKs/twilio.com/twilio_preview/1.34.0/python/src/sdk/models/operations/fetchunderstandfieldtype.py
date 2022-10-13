from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandFieldTypePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandFieldTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUnderstandFieldTypePathParams = field(default=None)
    security: FetchUnderstandFieldTypeSecurity = field(default=None)
    

@dataclass
class FetchUnderstandFieldTypeResponses:
    preview_understand_assistant_field_type: Optional[shared.PreviewUnderstandAssistantFieldType] = field(default=None)
    

@dataclass
class FetchUnderstandFieldTypeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUnderstandFieldTypeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
