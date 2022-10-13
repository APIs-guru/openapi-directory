from dataclasses import dataclass, field
from typing import Optional
DELETE_USER_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class DeleteUserBindingPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUserBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUserBindingPathParams = field(default=None)
    security: DeleteUserBindingSecurity = field(default=None)
    

@dataclass
class DeleteUserBindingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
