from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class DeleteSessionPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSessionRequest:
    path_params: DeleteSessionPathParams = field()
    security: DeleteSessionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSessionResponse:
    content_type: str = field()
    status_code: int = field()
    
