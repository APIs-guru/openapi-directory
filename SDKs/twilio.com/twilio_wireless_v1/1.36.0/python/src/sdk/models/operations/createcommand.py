from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]

class CreateCommandCreateCommandRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCommandCreateCommandRequest:
    callback_method: Optional[CreateCommandCreateCommandRequestCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    command: str = field(default=None, metadata={'form': { 'field_name': 'Command' }})
    command_mode: Optional[shared.CommandEnumCommandModeEnum] = field(default=None, metadata={'form': { 'field_name': 'CommandMode' }})
    delivery_receipt_requested: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DeliveryReceiptRequested' }})
    include_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IncludeSid' }})
    sim: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Sim' }})
    

@dataclass
class CreateCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCommandRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateCommandCreateCommandRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCommandSecurity = field(default=None)
    

@dataclass
class CreateCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wireless_v1_command: Optional[shared.WirelessV1Command] = field(default=None)
    
