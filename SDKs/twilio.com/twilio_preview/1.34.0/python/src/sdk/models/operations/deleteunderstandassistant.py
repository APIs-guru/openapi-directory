from dataclasses import dataclass, field
from typing import Optional
DELETE_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandAssistantPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandAssistantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUnderstandAssistantPathParams = field(default=None)
    security: DeleteUnderstandAssistantSecurity = field(default=None)
    

@dataclass
class DeleteUnderstandAssistantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
