from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateRolePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoleRequestBodyUpdateRoleRequest:
    permission: List[str] = field(default=None, metadata={'form': { 'field_name': 'Permission' }})
    

@dataclass
class UpdateRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRolePathParams = field(default=None)
    request: Optional[UpdateRoleRequestBodyUpdateRoleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRoleSecurity = field(default=None)
    

@dataclass
class UpdateRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_role: Optional[shared.ConversationsV1Role] = field(default=None)
    
