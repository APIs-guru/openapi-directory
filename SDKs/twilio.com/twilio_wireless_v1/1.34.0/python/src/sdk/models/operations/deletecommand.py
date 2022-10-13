from dataclasses import dataclass, field
from typing import Optional
DELETE_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class DeleteCommandPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCommandRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCommandPathParams = field(default=None)
    security: DeleteCommandSecurity = field(default=None)
    

@dataclass
class DeleteCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
