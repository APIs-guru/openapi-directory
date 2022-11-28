from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_WIRELESS_COMMAND_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateWirelessCommandCreateWirelessCommandRequest:
    command: str = field(metadata={'form': { 'field_name': 'Command' }})
    callback_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    command_mode: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CommandMode' }})
    device: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Device' }})
    include_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IncludeSid' }})
    sim: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Sim' }})
    

@dataclass
class CreateWirelessCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWirelessCommandRequest:
    security: CreateWirelessCommandSecurity = field()
    request: Optional[CreateWirelessCommandCreateWirelessCommandRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateWirelessCommandResponse:
    content_type: str = field()
    status_code: int = field()
    preview_wireless_command: Optional[shared.PreviewWirelessCommand] = field(default=None)
    
