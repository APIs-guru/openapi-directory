from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class DeleteSinkPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSinkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSinkRequest:
    path_params: DeleteSinkPathParams = field()
    security: DeleteSinkSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSinkResponse:
    content_type: str = field()
    status_code: int = field()
    
