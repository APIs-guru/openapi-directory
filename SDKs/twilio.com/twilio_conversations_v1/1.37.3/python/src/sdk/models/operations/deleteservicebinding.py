from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SERVICE_BINDING_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteServiceBindingPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServiceBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteServiceBindingRequest:
    path_params: DeleteServiceBindingPathParams = field()
    security: DeleteServiceBindingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteServiceBindingResponse:
    content_type: str = field()
    status_code: int = field()
    
