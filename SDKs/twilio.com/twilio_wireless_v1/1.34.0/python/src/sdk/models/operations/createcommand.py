from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class CreateCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCommandRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCommandSecurity = field(default=None)
    

@dataclass
class CreateCommandResponses:
    wireless_v1_command: Optional[shared.WirelessV1Command] = field(default=None)
    

@dataclass
class CreateCommandResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateCommandResponses]] = field(default=None)
    status_code: int = field(default=None)
    
