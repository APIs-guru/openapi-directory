from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SHORT_CODE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreateShortCodePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateShortCodeCreateShortCodeRequest:
    sid: str = field(default=None, metadata={'form': { 'field_name': 'Sid' }})
    

@dataclass
class CreateShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateShortCodeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateShortCodePathParams = field(default=None)
    request: Optional[CreateShortCodeCreateShortCodeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateShortCodeSecurity = field(default=None)
    

@dataclass
class CreateShortCodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    proxy_v1_service_short_code: Optional[shared.ProxyV1ServiceShortCode] = field(default=None)
    
