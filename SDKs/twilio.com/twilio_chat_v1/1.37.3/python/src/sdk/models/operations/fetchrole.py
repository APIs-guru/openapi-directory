from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ROLE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class FetchRolePathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoleRequest:
    path_params: FetchRolePathParams = field()
    security: FetchRoleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRoleResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v1_service_role: Optional[shared.ChatV1ServiceRole] = field(default=None)
    
