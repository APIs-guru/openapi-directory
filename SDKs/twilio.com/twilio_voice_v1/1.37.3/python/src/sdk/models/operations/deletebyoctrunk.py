from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteByocTrunkPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteByocTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteByocTrunkRequest:
    path_params: DeleteByocTrunkPathParams = field()
    security: DeleteByocTrunkSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteByocTrunkResponse:
    content_type: str = field()
    status_code: int = field()
    
