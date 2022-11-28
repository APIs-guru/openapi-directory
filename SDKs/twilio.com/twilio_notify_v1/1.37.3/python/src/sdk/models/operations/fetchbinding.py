from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_BINDING_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class FetchBindingPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBindingRequest:
    path_params: FetchBindingPathParams = field()
    security: FetchBindingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchBindingResponse:
    content_type: str = field()
    status_code: int = field()
    notify_v1_service_binding: Optional[shared.NotifyV1ServiceBinding] = field(default=None)
    
