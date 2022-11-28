from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteAssistantPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAssistantRequest:
    path_params: DeleteAssistantPathParams = field()
    security: DeleteAssistantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    
