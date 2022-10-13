from dataclasses import dataclass, field
from typing import Optional
DELETE_END_USER_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteEndUserPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteEndUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteEndUserPathParams = field(default=None)
    security: DeleteEndUserSecurity = field(default=None)
    

@dataclass
class DeleteEndUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
