from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_USER_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class FetchUserBindingPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUserBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUserBindingRequest:
    path_params: FetchUserBindingPathParams = field()
    security: FetchUserBindingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUserBindingResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v2_service_user_user_binding: Optional[shared.ChatV2ServiceUserUserBinding] = field(default=None)
    
