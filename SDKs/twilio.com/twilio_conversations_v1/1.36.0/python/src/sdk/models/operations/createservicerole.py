from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateServiceRolePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceRoleRequestBodyCreateServiceRoleRequest:
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    permission: List[str] = field(default=None, metadata={'form': { 'field_name': 'Permission' }})
    type: shared.ServiceRoleEnumRoleTypeEnum = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateServiceRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateServiceRolePathParams = field(default=None)
    request: Optional[CreateServiceRoleRequestBodyCreateServiceRoleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceRoleSecurity = field(default=None)
    

@dataclass
class CreateServiceRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_role: Optional[shared.ConversationsV1ServiceServiceRole] = field(default=None)
    
