from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ROLE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class FetchRolePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRolePathParams = field(default=None)
    security: FetchRoleSecurity = field(default=None)
    

@dataclass
class FetchRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ip_messaging_v2_service_role: Optional[shared.IPMessagingV2ServiceRole] = field(default=None)
    
