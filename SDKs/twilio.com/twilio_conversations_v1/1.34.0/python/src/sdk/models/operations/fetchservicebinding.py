from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SERVICE_BINDING_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceBindingPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchServiceBindingPathParams = field(default=None)
    security: FetchServiceBindingSecurity = field(default=None)
    

@dataclass
class FetchServiceBindingResponses:
    conversations_v1_service_service_binding: Optional[shared.ConversationsV1ServiceServiceBinding] = field(default=None)
    

@dataclass
class FetchServiceBindingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchServiceBindingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
