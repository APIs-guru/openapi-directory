from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SIM_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class DeleteSimPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSimRequest:
    path_params: DeleteSimPathParams = field()
    security: DeleteSimSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSimResponse:
    content_type: str = field()
    status_code: int = field()
    
