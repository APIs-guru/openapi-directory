from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_IP_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateIPCommandCreateIPCommandRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateIPCommandCreateIPCommandRequest:
    device_port: int = field(metadata={'form': { 'field_name': 'DevicePort' }})
    payload: str = field(metadata={'form': { 'field_name': 'Payload' }})
    sim: str = field(metadata={'form': { 'field_name': 'Sim' }})
    callback_method: Optional[CreateIPCommandCreateIPCommandRequestCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    payload_type: Optional[shared.IPCommandEnumPayloadTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'PayloadType' }})
    

@dataclass
class CreateIPCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIPCommandRequest:
    security: CreateIPCommandSecurity = field()
    request: Optional[CreateIPCommandCreateIPCommandRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateIPCommandResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_ip_command: Optional[shared.SupersimV1IPCommand] = field(default=None)
    
