from dataclasses import dataclass, field
from typing import Optional
DELETE_SERVICE_BINDING_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceBindingPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteServiceBindingPathParams = field(default=None)
    security: DeleteServiceBindingSecurity = field(default=None)
    

@dataclass
class DeleteServiceBindingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
