from dataclasses import dataclass, field
from typing import Optional
DELETE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteAssistantPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAssistantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteAssistantPathParams = field(default=None)
    security: DeleteAssistantSecurity = field(default=None)
    

@dataclass
class DeleteAssistantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
