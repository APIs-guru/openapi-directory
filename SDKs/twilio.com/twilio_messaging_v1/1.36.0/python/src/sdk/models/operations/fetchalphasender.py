from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchAlphaSenderPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAlphaSenderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAlphaSenderRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchAlphaSenderPathParams = field(default=None)
    security: FetchAlphaSenderSecurity = field(default=None)
    

@dataclass
class FetchAlphaSenderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    messaging_v1_service_alpha_sender: Optional[shared.MessagingV1ServiceAlphaSender] = field(default=None)
    
