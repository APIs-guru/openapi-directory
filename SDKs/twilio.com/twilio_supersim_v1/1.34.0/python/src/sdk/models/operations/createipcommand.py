from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_IP_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class CreateIPCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIPCommandRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIPCommandSecurity = field(default=None)
    

@dataclass
class CreateIPCommandResponses:
    supersim_v1_ip_command: Optional[shared.SupersimV1IPCommand] = field(default=None)
    

@dataclass
class CreateIPCommandResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateIPCommandResponses]] = field(default=None)
    status_code: int = field(default=None)
    
