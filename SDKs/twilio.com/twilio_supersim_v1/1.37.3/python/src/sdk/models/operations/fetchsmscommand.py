from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SMS_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchSmsCommandPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSmsCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSmsCommandRequest:
    path_params: FetchSmsCommandPathParams = field()
    security: FetchSmsCommandSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSmsCommandResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_sms_command: Optional[shared.SupersimV1SmsCommand] = field(default=None)
    
