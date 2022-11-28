from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WIRELESS_COMMAND_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchWirelessCommandPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWirelessCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWirelessCommandRequest:
    path_params: FetchWirelessCommandPathParams = field()
    security: FetchWirelessCommandSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWirelessCommandResponse:
    content_type: str = field()
    status_code: int = field()
    preview_wireless_command: Optional[shared.PreviewWirelessCommand] = field(default=None)
    
