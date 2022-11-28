from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateServiceRolePathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceRoleCreateServiceRoleRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    permission: List[str] = field(metadata={'form': { 'field_name': 'Permission' }})
    type: shared.ServiceRoleEnumRoleTypeEnum = field(metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateServiceRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRoleRequest:
    path_params: CreateServiceRolePathParams = field()
    security: CreateServiceRoleSecurity = field()
    request: Optional[CreateServiceRoleCreateServiceRoleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateServiceRoleResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_role: Optional[shared.ConversationsV1ServiceServiceRole] = field(default=None)
    
