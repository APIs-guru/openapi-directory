from dataclasses import dataclass, field
from typing import Optional
DELETE_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandFieldTypePathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandFieldTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUnderstandFieldTypePathParams = field(default=None)
    security: DeleteUnderstandFieldTypeSecurity = field(default=None)
    

@dataclass
class DeleteUnderstandFieldTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
