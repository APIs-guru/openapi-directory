from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_IP_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchIPCommandPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchIPCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchIPCommandRequest:
    path_params: FetchIPCommandPathParams = field()
    security: FetchIPCommandSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchIPCommandResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_ip_command: Optional[shared.SupersimV1IPCommand] = field(default=None)
    
