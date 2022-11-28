from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_FLEET_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class UpdateFleetPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateFleetUpdateFleetRequestIPCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateFleetUpdateFleetRequest:
    data_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'DataLimit' }})
    ip_commands_method: Optional[UpdateFleetUpdateFleetRequestIPCommandsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'IpCommandsMethod' }})
    ip_commands_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IpCommandsUrl' }})
    network_access_profile: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'NetworkAccessProfile' }})
    sms_commands_method: Optional[UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsCommandsMethod' }})
    sms_commands_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsCommandsUrl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFleetRequest:
    path_params: UpdateFleetPathParams = field()
    security: UpdateFleetSecurity = field()
    request: Optional[UpdateFleetUpdateFleetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateFleetResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_fleet: Optional[shared.SupersimV1Fleet] = field(default=None)
    
