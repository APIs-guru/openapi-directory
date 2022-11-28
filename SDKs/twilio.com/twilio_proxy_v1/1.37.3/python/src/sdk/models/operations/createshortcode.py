from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SHORT_CODE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreateShortCodePathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateShortCodeCreateShortCodeRequest:
    sid: str = field(metadata={'form': { 'field_name': 'Sid' }})
    

@dataclass
class CreateShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateShortCodeRequest:
    path_params: CreateShortCodePathParams = field()
    security: CreateShortCodeSecurity = field()
    request: Optional[CreateShortCodeCreateShortCodeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateShortCodeResponse:
    content_type: str = field()
    status_code: int = field()
    proxy_v1_service_short_code: Optional[shared.ProxyV1ServiceShortCode] = field(default=None)
    
