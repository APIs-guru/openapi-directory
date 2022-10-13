from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_IP_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchIPCommandPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchIPCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchIPCommandRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchIPCommandPathParams = field(default=None)
    security: FetchIPCommandSecurity = field(default=None)
    

@dataclass
class FetchIPCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supersim_v1_ip_command: Optional[shared.SupersimV1IPCommand] = field(default=None)
    
