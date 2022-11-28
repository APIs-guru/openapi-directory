from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class FetchSessionPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSessionRequest:
    path_params: FetchSessionPathParams = field()
    security: FetchSessionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSessionResponse:
    content_type: str = field()
    status_code: int = field()
    proxy_v1_service_session: Optional[shared.ProxyV1ServiceSession] = field(default=None)
    
