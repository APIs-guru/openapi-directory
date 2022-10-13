from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreateSessionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSessionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSessionPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSessionSecurity = field(default=None)
    

@dataclass
class CreateSessionResponses:
    proxy_v1_service_session: Optional[shared.ProxyV1ServiceSession] = field(default=None)
    

@dataclass
class CreateSessionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSessionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
