from dataclasses import dataclass, field
from typing import Optional
DELETE_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class DeleteSinkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSinkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSinkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSinkPathParams = field(default=None)
    security: DeleteSinkSecurity = field(default=None)
    

@dataclass
class DeleteSinkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
