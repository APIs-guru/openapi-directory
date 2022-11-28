from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class DeleteCommandPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCommandRequest:
    path_params: DeleteCommandPathParams = field()
    security: DeleteCommandSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCommandResponse:
    content_type: str = field()
    status_code: int = field()
    
