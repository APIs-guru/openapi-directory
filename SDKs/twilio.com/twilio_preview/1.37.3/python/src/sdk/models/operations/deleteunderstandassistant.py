from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteUnderstandAssistantPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUnderstandAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUnderstandAssistantRequest:
    path_params: DeleteUnderstandAssistantPathParams = field()
    security: DeleteUnderstandAssistantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUnderstandAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    
