from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandFieldTypePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandFieldTypeRequest:
    path_params: DeleteUnderstandFieldTypePathParams = field()
    security: DeleteUnderstandFieldTypeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUnderstandFieldTypeResponse:
    content_type: str = field()
    status_code: int = field()
    
