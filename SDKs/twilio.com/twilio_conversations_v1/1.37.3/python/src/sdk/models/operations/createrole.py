from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateRoleCreateRoleRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    permission: List[str] = field(metadata={'form': { 'field_name': 'Permission' }})
    type: shared.RoleEnumRoleTypeEnum = field(metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRoleRequest:
    security: CreateRoleSecurity = field()
    request: Optional[CreateRoleCreateRoleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateRoleResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_role: Optional[shared.ConversationsV1Role] = field(default=None)
    
