from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ROLE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class CreateRolePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateRolePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateRoleSecurity = field(default=None)
    

@dataclass
class CreateRoleResponses:
    chat_v2_service_role: Optional[shared.ChatV2ServiceRole] = field(default=None)
    

@dataclass
class CreateRoleResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateRoleResponses]] = field(default=None)
    status_code: int = field(default=None)
    
