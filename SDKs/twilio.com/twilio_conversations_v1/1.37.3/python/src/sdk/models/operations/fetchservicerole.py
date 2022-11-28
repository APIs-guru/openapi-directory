from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceRolePathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceRoleRequest:
    path_params: FetchServiceRolePathParams = field()
    security: FetchServiceRoleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceRoleResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_role: Optional[shared.ConversationsV1ServiceServiceRole] = field(default=None)
    
