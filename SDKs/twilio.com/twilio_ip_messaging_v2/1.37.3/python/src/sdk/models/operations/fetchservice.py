from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class FetchServicePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceRequest:
    path_params: FetchServicePathParams = field()
    security: FetchServiceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v2_service: Optional[shared.IPMessagingV2Service] = field(default=None)
    
