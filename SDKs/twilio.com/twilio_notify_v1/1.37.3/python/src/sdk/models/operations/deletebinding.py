from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_BINDING_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class DeleteBindingPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteBindingRequest:
    path_params: DeleteBindingPathParams = field()
    security: DeleteBindingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteBindingResponse:
    content_type: str = field()
    status_code: int = field()
    
