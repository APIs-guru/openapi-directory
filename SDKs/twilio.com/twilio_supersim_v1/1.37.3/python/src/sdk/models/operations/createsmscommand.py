from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
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
    payload: str = field(metadata={'form': { 'field_name': 'Payload' }})
    sim: str = field(metadata={'form': { 'field_name': 'Sim' }})
    callback_method: Optional[CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    

@dataclass
class CreateSmsCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSmsCommandRequest:
    security: CreateSmsCommandSecurity = field()
    request: Optional[CreateSmsCommandCreateSmsCommandRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSmsCommandResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_sms_command: Optional[shared.SupersimV1SmsCommand] = field(default=None)
    
