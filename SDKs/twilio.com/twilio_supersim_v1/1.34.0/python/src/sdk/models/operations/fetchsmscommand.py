from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SMS_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchSmsCommandPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSmsCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSmsCommandRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSmsCommandPathParams = field(default=None)
    security: FetchSmsCommandSecurity = field(default=None)
    

@dataclass
class FetchSmsCommandResponses:
    supersim_v1_sms_command: Optional[shared.SupersimV1SmsCommand] = field(default=None)
    

@dataclass
class FetchSmsCommandResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSmsCommandResponses]] = field(default=None)
    status_code: int = field(default=None)
    
