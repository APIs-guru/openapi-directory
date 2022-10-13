from dataclasses import dataclass, field
from typing import Optional
DELETE_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteByocTrunkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteByocTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteByocTrunkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteByocTrunkPathParams = field(default=None)
    security: DeleteByocTrunkSecurity = field(default=None)
    

@dataclass
class DeleteByocTrunkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
