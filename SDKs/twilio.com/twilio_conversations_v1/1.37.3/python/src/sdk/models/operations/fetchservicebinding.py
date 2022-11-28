from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_BINDING_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceBindingPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceBindingRequest:
    path_params: FetchServiceBindingPathParams = field()
    security: FetchServiceBindingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceBindingResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_binding: Optional[shared.ConversationsV1ServiceServiceBinding] = field(default=None)
    
