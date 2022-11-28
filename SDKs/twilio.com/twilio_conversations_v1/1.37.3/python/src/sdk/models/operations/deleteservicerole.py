from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceRolePathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceRoleRequest:
    path_params: DeleteServiceRolePathParams = field()
    security: DeleteServiceRoleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteServiceRoleResponse:
    content_type: str = field()
    status_code: int = field()
    
