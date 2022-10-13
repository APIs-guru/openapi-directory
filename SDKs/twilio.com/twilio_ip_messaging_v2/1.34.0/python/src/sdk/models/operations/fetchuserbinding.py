from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_USER_BINDING_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class FetchUserBindingPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUserBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUserBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUserBindingPathParams = field(default=None)
    security: FetchUserBindingSecurity = field(default=None)
    

@dataclass
class FetchUserBindingResponses:
    ip_messaging_v2_service_user_user_binding: Optional[shared.IPMessagingV2ServiceUserUserBinding] = field(default=None)
    

@dataclass
class FetchUserBindingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUserBindingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
