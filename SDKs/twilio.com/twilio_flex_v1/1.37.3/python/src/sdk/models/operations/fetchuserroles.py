from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_USER_ROLES_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class FetchUserRolesHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUserRolesSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUserRolesRequest:
    headers: FetchUserRolesHeaders = field()
    security: FetchUserRolesSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUserRolesResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_user_roles: Optional[shared.FlexV1UserRoles] = field(default=None)
    
