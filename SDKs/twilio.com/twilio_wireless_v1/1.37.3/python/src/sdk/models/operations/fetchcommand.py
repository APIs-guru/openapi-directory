from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class FetchCommandPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCommandSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCommandRequest:
    path_params: FetchCommandPathParams = field()
    security: FetchCommandSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCommandResponse:
    content_type: str = field()
    status_code: int = field()
    wireless_v1_command: Optional[shared.WirelessV1Command] = field(default=None)
    
