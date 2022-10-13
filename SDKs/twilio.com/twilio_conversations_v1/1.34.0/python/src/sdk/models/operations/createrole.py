from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRoleRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateRoleSecurity = field(default=None)
    

@dataclass
class CreateRoleResponses:
    conversations_v1_role: Optional[shared.ConversationsV1Role] = field(default=None)
    

@dataclass
class CreateRoleResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateRoleResponses]] = field(default=None)
    status_code: int = field(default=None)
    
