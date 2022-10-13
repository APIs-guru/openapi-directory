from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_FLEET_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateFleetRequestBodyIPCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateFleetRequestBodySmsCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateFleetRequestBodyCreateFleetRequest:
    data_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DataEnabled' }})
    data_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'DataLimit' }})
    ip_commands_method: Optional[CreateFleetRequestBodyIPCommandsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'IpCommandsMethod' }})
    ip_commands_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IpCommandsUrl' }})
    network_access_profile: str = field(default=None, metadata={'form': { 'field_name': 'NetworkAccessProfile' }})
    sms_commands_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SmsCommandsEnabled' }})
    sms_commands_method: Optional[CreateFleetRequestBodySmsCommandsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsCommandsMethod' }})
    sms_commands_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsCommandsUrl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFleetRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateFleetRequestBodyCreateFleetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateFleetSecurity = field(default=None)
    

@dataclass
class CreateFleetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supersim_v1_fleet: Optional[shared.SupersimV1Fleet] = field(default=None)
    
