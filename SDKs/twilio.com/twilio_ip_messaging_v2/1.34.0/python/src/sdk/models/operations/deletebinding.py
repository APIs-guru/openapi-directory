from dataclasses import dataclass, field
from typing import Optional
DELETE_BINDING_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class DeleteBindingPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteBindingPathParams = field(default=None)
    security: DeleteBindingSecurity = field(default=None)
    

@dataclass
class DeleteBindingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
