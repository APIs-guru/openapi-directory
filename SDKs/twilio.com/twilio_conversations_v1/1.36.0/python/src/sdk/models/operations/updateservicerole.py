from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceRolePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceRoleUpdateServiceRoleRequest:
    permission: List[str] = field(default=None, metadata={'form': { 'field_name': 'Permission' }})
    

@dataclass
class UpdateServiceRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceRolePathParams = field(default=None)
    request: Optional[UpdateServiceRoleUpdateServiceRoleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceRoleSecurity = field(default=None)
    

@dataclass
class UpdateServiceRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_role: Optional[shared.ConversationsV1ServiceServiceRole] = field(default=None)
    
