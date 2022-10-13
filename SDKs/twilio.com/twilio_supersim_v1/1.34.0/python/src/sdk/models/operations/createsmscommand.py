from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SMS_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class CreateSmsCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSmsCommandRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSmsCommandSecurity = field(default=None)
    

@dataclass
class CreateSmsCommandResponses:
    supersim_v1_sms_command: Optional[shared.SupersimV1SmsCommand] = field(default=None)
    

@dataclass
class CreateSmsCommandResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSmsCommandResponses]] = field(default=None)
    status_code: int = field(default=None)
    
