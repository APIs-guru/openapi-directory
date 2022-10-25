from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_SMS_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateSmsCommandCreateSmsCommandRequest:
    callback_method: Optional[CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    payload: str = field(default=None, metadata={'form': { 'field_name': 'Payload' }})
    sim: str = field(default=None, metadata={'form': { 'field_name': 'Sim' }})
    

@dataclass
class CreateSmsCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSmsCommandRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateSmsCommandCreateSmsCommandRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSmsCommandSecurity = field(default=None)
    

@dataclass
class CreateSmsCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supersim_v1_sms_command: Optional[shared.SupersimV1SmsCommand] = field(default=None)
    
