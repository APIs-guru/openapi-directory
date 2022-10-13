from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class FetchSessionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSessionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSessionPathParams = field(default=None)
    security: FetchSessionSecurity = field(default=None)
    

@dataclass
class FetchSessionResponses:
    proxy_v1_service_session: Optional[shared.ProxyV1ServiceSession] = field(default=None)
    

@dataclass
class FetchSessionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSessionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
