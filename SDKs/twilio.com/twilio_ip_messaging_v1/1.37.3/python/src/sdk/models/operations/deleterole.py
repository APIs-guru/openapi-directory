from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ROLE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class DeleteRolePathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRoleRequest:
    path_params: DeleteRolePathParams = field()
    security: DeleteRoleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteRoleResponse:
    content_type: str = field()
    status_code: int = field()
    
