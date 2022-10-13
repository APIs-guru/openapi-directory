from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceRolePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchServiceRolePathParams = field(default=None)
    security: FetchServiceRoleSecurity = field(default=None)
    

@dataclass
class FetchServiceRoleResponses:
    conversations_v1_service_service_role: Optional[shared.ConversationsV1ServiceServiceRole] = field(default=None)
    

@dataclass
class FetchServiceRoleResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchServiceRoleResponses]] = field(default=None)
    status_code: int = field(default=None)
    
