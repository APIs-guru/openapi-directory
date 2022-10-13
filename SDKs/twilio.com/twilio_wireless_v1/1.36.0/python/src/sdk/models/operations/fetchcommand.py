from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class FetchCommandPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCommandRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCommandPathParams = field(default=None)
    security: FetchCommandSecurity = field(default=None)
    

@dataclass
class FetchCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wireless_v1_command: Optional[shared.WirelessV1Command] = field(default=None)
    
