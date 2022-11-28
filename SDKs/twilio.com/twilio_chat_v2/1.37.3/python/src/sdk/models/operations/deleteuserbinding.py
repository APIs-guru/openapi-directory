from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_USER_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class DeleteUserBindingPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUserBindingRequest:
    path_params: DeleteUserBindingPathParams = field()
    security: DeleteUserBindingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUserBindingResponse:
    content_type: str = field()
    status_code: int = field()
    
