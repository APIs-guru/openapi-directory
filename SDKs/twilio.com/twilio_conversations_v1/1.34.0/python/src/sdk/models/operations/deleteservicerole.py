from dataclasses import dataclass, field
from typing import Optional
DELETE_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceRolePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteServiceRolePathParams = field(default=None)
    security: DeleteServiceRoleSecurity = field(default=None)
    

@dataclass
class DeleteServiceRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
