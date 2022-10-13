from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_IP_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateIPCommandRequestBodyCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateIPCommandRequestBodyCreateIPCommandRequest:
    callback_method: Optional[CreateIPCommandRequestBodyCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    device_port: int = field(default=None, metadata={'form': { 'field_name': 'DevicePort' }})
    payload: str = field(default=None, metadata={'form': { 'field_name': 'Payload' }})
    payload_type: Optional[shared.IPCommandEnumPayloadTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'PayloadType' }})
    sim: str = field(default=None, metadata={'form': { 'field_name': 'Sim' }})
    

@dataclass
class CreateIPCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIPCommandRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateIPCommandRequestBodyCreateIPCommandRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIPCommandSecurity = field(default=None)
    

@dataclass
class CreateIPCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supersim_v1_ip_command: Optional[shared.SupersimV1IPCommand] = field(default=None)
    
