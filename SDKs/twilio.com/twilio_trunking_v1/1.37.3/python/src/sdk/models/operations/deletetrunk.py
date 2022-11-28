from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class DeleteTrunkPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTrunkRequest:
    path_params: DeleteTrunkPathParams = field()
    security: DeleteTrunkSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteTrunkResponse:
    content_type: str = field()
    status_code: int = field()
    
