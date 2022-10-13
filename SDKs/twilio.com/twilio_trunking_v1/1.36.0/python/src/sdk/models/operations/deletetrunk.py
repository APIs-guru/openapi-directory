from dataclasses import dataclass, field
from typing import Optional
DELETE_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class DeleteTrunkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTrunkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteTrunkPathParams = field(default=None)
    security: DeleteTrunkSecurity = field(default=None)
    

@dataclass
class DeleteTrunkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
