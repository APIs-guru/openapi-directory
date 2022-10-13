from dataclasses import dataclass, field
from typing import Optional
DELETE_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class DeleteSessionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSessionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSessionPathParams = field(default=None)
    security: DeleteSessionSecurity = field(default=None)
    

@dataclass
class DeleteSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
