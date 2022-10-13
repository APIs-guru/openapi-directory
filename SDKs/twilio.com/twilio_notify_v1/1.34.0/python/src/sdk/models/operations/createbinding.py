from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_BINDING_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class CreateBindingPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateBindingPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateBindingSecurity = field(default=None)
    

@dataclass
class CreateBindingResponses:
    notify_v1_service_binding: Optional[shared.NotifyV1ServiceBinding] = field(default=None)
    

@dataclass
class CreateBindingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateBindingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
