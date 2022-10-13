from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchRolePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRolePathParams = field(default=None)
    security: FetchRoleSecurity = field(default=None)
    

@dataclass
class FetchRoleResponses:
    conversations_v1_role: Optional[shared.ConversationsV1Role] = field(default=None)
    

@dataclass
class FetchRoleResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchRoleResponses]] = field(default=None)
    status_code: int = field(default=None)
    
