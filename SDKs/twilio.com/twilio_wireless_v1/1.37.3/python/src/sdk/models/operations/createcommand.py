from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
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
    command: str = field(metadata={'form': { 'field_name': 'Command' }})
    callback_method: Optional[CreateCommandCreateCommandRequestCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    command_mode: Optional[shared.CommandEnumCommandModeEnum] = field(default=None, metadata={'form': { 'field_name': 'CommandMode' }})
    delivery_receipt_requested: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DeliveryReceiptRequested' }})
    include_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IncludeSid' }})
    sim: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Sim' }})
    

@dataclass
class CreateCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCommandRequest:
    security: CreateCommandSecurity = field()
    request: Optional[CreateCommandCreateCommandRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCommandResponse:
    content_type: str = field()
    status_code: int = field()
    wireless_v1_command: Optional[shared.WirelessV1Command] = field(default=None)
    
