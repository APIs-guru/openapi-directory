from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_END_USER_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class DeleteEndUserPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteEndUserRequest:
    path_params: DeleteEndUserPathParams = field()
    security: DeleteEndUserSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteEndUserResponse:
    content_type: str = field()
    status_code: int = field()
    
