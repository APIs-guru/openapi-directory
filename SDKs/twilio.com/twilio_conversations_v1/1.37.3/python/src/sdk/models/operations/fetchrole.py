from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchRolePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoleRequest:
    path_params: FetchRolePathParams = field()
    security: FetchRoleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRoleResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_role: Optional[shared.ConversationsV1Role] = field(default=None)
    
