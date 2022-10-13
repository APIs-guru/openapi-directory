from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ROLE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateRolePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateRolePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRoleSecurity = field(default=None)
    

@dataclass
class UpdateRoleResponses:
    chat_v1_service_role: Optional[shared.ChatV1ServiceRole] = field(default=None)
    

@dataclass
class UpdateRoleResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateRoleResponses]] = field(default=None)
    status_code: int = field(default=None)
    
