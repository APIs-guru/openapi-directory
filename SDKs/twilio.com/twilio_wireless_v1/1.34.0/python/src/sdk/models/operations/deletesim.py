from dataclasses import dataclass, field
from typing import Optional
DELETE_SIM_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class DeleteSimPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSimRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSimPathParams = field(default=None)
    security: DeleteSimSecurity = field(default=None)
    

@dataclass
class DeleteSimResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
