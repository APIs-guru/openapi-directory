from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WIRELESS_COMMAND_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchWirelessCommandPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWirelessCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWirelessCommandRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWirelessCommandPathParams = field(default=None)
    security: FetchWirelessCommandSecurity = field(default=None)
    

@dataclass
class FetchWirelessCommandResponses:
    preview_wireless_command: Optional[shared.PreviewWirelessCommand] = field(default=None)
    

@dataclass
class FetchWirelessCommandResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWirelessCommandResponses]] = field(default=None)
    status_code: int = field(default=None)
    
