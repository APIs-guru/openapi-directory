from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_ROLE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateRolePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRoleRequestBodyCreateRoleRequest:
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    permission: List[str] = field(default=None, metadata={'form': { 'field_name': 'Permission' }})
    type: shared.RoleEnumRoleTypeEnum = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateRolePathParams = field(default=None)
    request: Optional[CreateRoleRequestBodyCreateRoleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateRoleSecurity = field(default=None)
    

@dataclass
class CreateRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ip_messaging_v1_service_role: Optional[shared.IPMessagingV1ServiceRole] = field(default=None)
    
